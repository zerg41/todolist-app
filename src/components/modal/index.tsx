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
        <div className='modal'>
          <header className='modal__header'>
            <h3 className='modal__title'>{`${content ? 'Edit' : 'Add New'} Todo`}</h3>
            <Button type='close' onClick={onClose} />
          </header>
          <main className='modal__main'>
            <form>
              <fieldset>
                <label htmlFor='todo-title'>Todo title: </label>
                <input id='todo-title' type='text' />
              </fieldset>
              <fieldset>
                <label htmlFor='todo-description'>Todo Description: </label>
                <input id='todo-description' type='textarea' />
              </fieldset>
              <fieldset>
                <label htmlFor='todo-title'>Todo title</label>
                <input id='todo-title' type='text' />
              </fieldset>
              <fieldset>
                <label htmlFor='todo-title'>Todo title</label>
                <input id='todo-title' type='text' />
              </fieldset>
            </form>
          </main>
          <footer className='modal__footer'>
            <button className='button button--warning' onClick={onClose}>
              Отмена
            </button>
            <button className={`button button--warning `} onClick={onAccept} disabled={false}>
              Add Todo
            </button>
          </footer>
        </div>
      )}
    </>
  );
};
