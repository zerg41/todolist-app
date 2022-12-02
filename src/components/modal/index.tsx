import React, { ChangeEvent, FC, useMemo, useState } from 'react';
// components
import { Button } from 'components';
// style
import './styles.css';
import uploadIconSrc from 'assets/images/icon-upload.png';
// utils
import type { ITodo } from 'utils/types';

type ModalProps = {
  isOpen: boolean;
  content?: ITodo;
  onClose: () => void;
  onAccept: () => void;
};

export const Modal: FC<ModalProps> = ({ isOpen, onClose, onAccept, content }) => {
  let [files, setFiles] = useState<{ name: string; extension: string }[]>([]);

  let renderUploadedFiles = useMemo(() => {
    return files?.map((file) => {
      return <div className='uploaded-file__container'>{`${file.name}.${file.extension}`}</div>;
    });
  }, [files]);

  function handleUpload(evt: ChangeEvent<HTMLInputElement>) {
    if (evt.target.files) {
      let file = evt.target.files[0];
      let [name, extension] = file.name.split('.');
      name = name.length > 5 ? name.slice(0, 3) + '...' : name;

      setFiles((files) => [...files, { name, extension }]);
    }
  }

  return (
    <>
      {isOpen && (
        <>
          <div className='modal'>
            <header className='modal__header'>
              <h3 className='modal__title'>{`${content ? 'Edit' : 'Add New'} Todo`}</h3>
              <Button variation='close' onClick={onClose} />
            </header>
            <main className='modal__main'>
              <form id='todo-form' className='modal__form'>
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
                    type='date'
                    translate='no'
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
                  ></textarea>

                  <label className='modal__form-label'>Attachments:</label>
                  <div className='modal__form-upload'>
                    <label htmlFor='todo-files' className='form-upload__drop-zone'>
                      <img src={uploadIconSrc} alt='upload' width={40} height={40} />
                    </label>
                    <input
                      id='todo-files'
                      className='modal__form-input visually-hidden'
                      name='todo-files'
                      type='file'
                      onChange={handleUpload}
                    />
                    <span className='form-upload__file-container'>{renderUploadedFiles}</span>
                  </div>
                </fieldset>
              </form>
            </main>
            <footer className='modal__footer'>
              <Button
                variation='primary'
                type='submit'
                form='todo-form'
                onClick={onAccept}
                disabled={false}
              >
                OK
              </Button>
              <Button
                variation='danger'
                type='reset'
                form='todo-form'
                onClick={() => {
                  setFiles([]);
                  onClose();
                }}
              >
                Cancel
              </Button>
            </footer>
          </div>
          <div className='modal__mask' onClick={onClose}></div>
        </>
      )}
    </>
  );
};
