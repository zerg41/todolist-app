import React, { FC, useState } from 'react';
// components
import { Modal, Button } from 'components';
// style
import './styles.css';
// utils
import type { ITodo } from 'utils/types';

type CardProps = {
  todo: ITodo;
};

export const Card: FC<CardProps> = ({ todo }) => {
  let { id, title, description, deadline, files, completed } = todo;
  let [isCompleted, setIsCompleted] = useState(completed);
  let [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddButtonClick() {
    setIsModalOpen(false);
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  function handleEditButtonClick() {
    setIsModalOpen(true);
  }

  function handleDeleteButtonClick() {}

  return (
    <li className='todo-list__item'>
      <article className={`todo ${isCompleted ? 'todo_completed' : ''}`}>
        <header className='todo__header'>
          <span>
            <input
              type='checkbox'
              checked={isCompleted}
              onChange={() => {
                setIsCompleted(!isCompleted);
              }}
              style={{ cursor: 'pointer' }}
            />
            <h4 className={`todo__title ${isCompleted && 'todo__title_crossed-out'}`}>{title}</h4>
          </span>

          <span className='todo__button-group'>
            <Button variation='edit' onClick={handleEditButtonClick} />
            <Button variation='delete' onClick={handleDeleteButtonClick} />
          </span>
        </header>
        <main>
          <p>{description}</p>
          <p>{deadline}</p>
          <div>{files}</div>
        </main>
      </article>
      <Modal isOpen={isModalOpen} onAccept={handleAddButtonClick} onClose={handleModalClose} />
    </li>
  );
};
