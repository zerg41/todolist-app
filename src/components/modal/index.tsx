import React, { FC, useEffect, useState, useRef } from 'react';
import './index.css';

const CONFIRMATION_DELAY = 5;
const ONE_SECOND = 1000;

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
};

export const Modal: FC<ModalProps> = ({ isOpen, onClose, onAccept }) => {
  return (
    <>
      {isOpen && (
        <div className='modal'>
          <header className='modal__header'>
            <h3 className='modal__title'>Согласие с правилами</h3>
            <button className='close-button' onClick={onClose}>
              x
            </button>
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
