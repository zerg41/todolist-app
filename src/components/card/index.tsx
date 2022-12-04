import React, { FC, useContext, useState } from 'react';
// context
import { ModalContext } from 'context';
// components
import { Button } from 'components';
// style
import './styles.css';
// utils
import dayjs from 'dayjs';
import { CARD_DATE_FORMAT } from 'utils/constants';
import type { ITodo } from 'utils/types';

type CardProps = {
  todo: ITodo;
};

export const Card: FC<CardProps> = ({ todo }) => {
  let { id, title, description, deadline, files, completed } = todo;

  let modal = useContext(ModalContext);
  let [isCompleted, setIsCompleted] = useState(completed);

  function handleEdit() {
    modal?.open(todo);
  }

  function handleDelete() {}

  function handleStatusChange() {}

  return (
    <article className={`todo ${isCompleted ? 'todo_completed' : ''}`}>
      <header className='todo__header'>
        <span>
          <input
            type='checkbox'
            checked={isCompleted}
            onChange={handleStatusChange}
            style={{ cursor: 'pointer' }}
          />
          <h4 className={`todo__title ${isCompleted && 'todo__title_crossed-out'}`}>{title}</h4>
        </span>

        <span className='todo__button-group'>
          <Button variation='edit' onClick={handleEdit} />
          <Button variation='delete' onClick={handleDelete} />
        </span>
      </header>
      <main>
        <p>{description}</p>
        <p>{dayjs(deadline).format(CARD_DATE_FORMAT)}</p>
        <div>{files}</div>
      </main>
    </article>
  );
};
