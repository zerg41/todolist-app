import React, { FC, ChangeEvent, FormEvent, KeyboardEvent, useMemo, useState } from 'react';
// components
import { Button } from 'components';
// style
import './styles.css';
import uploadIcon from 'assets/images/icon-upload.png';
// utils
import dayjs from 'dayjs';
import { INPUT_DATE_FORMAT } from 'utils/constants';
import type { ITodo, IUploadedFile } from 'utils/types';

const ESCAPE_CODE = 'Escape';

type ModalProps = {
  isOpen: boolean;
  content?: ITodo;
  onClose: () => void;
};

export const Modal: FC<ModalProps> = ({ isOpen, content, onClose }) => {
  let [files, setFiles] = useState<IUploadedFile[]>(content?.files ?? []);

  function handleUploadFile(evt: ChangeEvent<HTMLInputElement>) {
    if (evt.target.files) {
      let file = evt.target.files[0];
      let [name, extension] = file.name.split('.');
      name = name.length > 5 ? name.slice(0, 3) + '...' : name;

      setFiles((files) => [...files, { name, extension }]);
    }
  }

  function handleEscKeyDown(evt: KeyboardEvent<HTMLDivElement>) {
    if (evt.code === ESCAPE_CODE) {
      handleClose();
    }
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement | HTMLButtonElement>) {
    // TODO
    let form = evt.target;

    // let isValidForm = form.checkValidity();
    // if (isValidForm) {
    //   onClose();
    // } else {
    //   form.reportValidity();
    // }
  }

  function handleClose() {
    setFiles([]);
    onClose();
  }

  let renderUploadedFiles = useMemo(() => {
    return files?.map((file) => {
      return <div className='form-upload__file'>{`${file.name}.${file.extension}`}</div>;
    });
  }, [files]);

  return (
    <>
      {isOpen && (
        <>
          <div className='modal' role='dialog' aria-modal='true' onKeyDown={handleEscKeyDown}>
            <header className='modal__header'>
              <h3 className='modal__title'>{`${content ? 'Edit' : 'Add New'} Todo`}</h3>
              <Button variation='close' onClick={handleClose} />
            </header>
            <section className='modal__body'>
              <form id='todo-form' className='modal__form' onSubmit={handleSubmit}>
                <fieldset className='modal__form-fieldset'>
                  <legend className='modal__form-legend'>Todo Information</legend>

                  <label
                    htmlFor='todo-title'
                    className='modal__form-label modal__form-label_required'
                  >
                    Title:
                  </label>
                  <input
                    id='todo-title'
                    name='todo-title'
                    className='modal__form-input'
                    type='text'
                    defaultValue={content?.title}
                    autoFocus
                    required
                  />

                  <label
                    htmlFor='todo-deadline'
                    className='modal__form-label modal__form-label_required'
                  >
                    Deadline:
                  </label>
                  <input
                    id='todo-deadline'
                    className='modal__form-input'
                    name='todo-deadline'
                    type='datetime-local'
                    defaultValue={
                      content?.deadline ? dayjs(content.deadline).format(INPUT_DATE_FORMAT) : ''
                    }
                    required
                  />

                  <label htmlFor='todo-description' className='modal__form-label'>
                    Description:
                  </label>
                  <textarea
                    id='todo-description'
                    className='modal__form-input modal__form-textarea'
                    name='todo-description'
                    maxLength={183}
                    rows={3}
                    spellCheck={true}
                    defaultValue={content?.description}
                  ></textarea>

                  <label className='modal__form-label'>Attachments:</label>
                  <div className='modal__form-upload'>
                    <label htmlFor='todo-files' className='form-upload__drop-zone'>
                      <img src={uploadIcon} alt='upload' width={40} height={40} />
                    </label>
                    <input
                      id='todo-files'
                      className='modal__form-input visually-hidden'
                      name='todo-files'
                      type='file'
                      onChange={handleUploadFile}
                    />
                    <span className='form-upload__file-container'>{renderUploadedFiles}</span>
                  </div>
                </fieldset>
              </form>
            </section>
            <footer className='modal__footer'>
              <Button
                text='OK'
                variation='primary'
                type='submit'
                form='todo-form'
                // onClick={handleSubmit}
                disabled={false}
              />
              <Button
                text='Cancel'
                variation='danger'
                type='reset'
                form='todo-form'
                onClick={handleClose}
              />
            </footer>
          </div>
          <div className='modal__mask' onClick={handleClose}></div>
        </>
      )}
    </>
  );
};
