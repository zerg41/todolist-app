import React, { FC } from 'react';
// components
import { Button } from 'components';
// style
import './styles.css';
// utils
import type { ITodo } from 'utils/types';

type ModalProps = {
  isOpen: boolean;
  content?: ITodo;
  onClose: () => void;
  onAccept: () => void;
};

export const Modal: FC<ModalProps> = ({ isOpen, onClose, onAccept, content }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className='modal'>
            <header className='modal__header'>
              <h3 className='modal__title'>{`${content ? 'Edit' : 'Add New'} Todo`}</h3>
              <Button type='close' onClick={onClose} />
            </header>
            <main className='modal__main'>
              <form id='todo-form' className='modal__form'>
                <fieldset className='modal__form-fieldset'>
                  <legend style={{ display: 'none' }}>Todo Info</legend>

                  <label htmlFor='todo-title' className='modal__form-label'>
                    Title:
                  </label>
                  <input id='todo-title' type='text' className='modal__form-input' />

                  <label htmlFor='todo-deadline' className='modal__form-label'>
                    Deadline
                  </label>
                  <input id='todo-deadline' type='date' className='modal__form-input' />

                  <label htmlFor='todo-description' className='modal__form-label'>
                    Description:
                  </label>
                  <textarea
                    id='todo-description'
                    className='modal__form-input text-area'
                    maxLength={183}
                    rows={3}
                    spellCheck={true}
                  ></textarea>

                  <label htmlFor='todo-files' className='modal__form-label'>
                    Attachments:
                  </label>
                  <input
                    id='todo-files'
                    type='file'
                    className='modal__form-input visually-hidden'
                  />
                </fieldset>
              </form>
            </main>
            <footer className='modal__footer'>
              <button
                type='submit'
                form='todo-form'
                className={`button button--warning `}
                onClick={onAccept}
                disabled={false}
              >
                Add Todo
              </button>
              <button className='button button--warning' onClick={onClose}>
                Отмена
              </button>
            </footer>
          </div>
          <div className='modal__mask'></div>
        </>
      )}
    </>
  );
};
