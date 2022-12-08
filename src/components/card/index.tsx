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
  let isOutdated = dayjs().isAfter(deadline);

  function handleEdit() {
    modal?.open(todo);
  }

  function handleDelete() {}

  function handleStatusChange() {
    setIsCompleted(!isCompleted);
  }

  return (
    <article
      className={`todo  ${isOutdated && 'todo_outdated'} ${isCompleted && 'todo_completed'}`}
    >
      <header className='todo__header'>
        <div>
          <h4 className={`todo__title ${isCompleted && 'todo__title_crossed-out'}`}>{title}</h4>
          <span className='todo__id'>{`# ${id}`}</span>
        </div>
        <div className='todo__button-group'>
          <Button variation='edit' onClick={handleEdit} />
          <Button variation='delete' onClick={handleDelete} />
        </div>
      </header>
      <section className='todo__body'>
        <div className='todo-deadline'>
          <label htmlFor={`checkDeadlineTodo${id}`} className='todo-deadline__label'>
            {dayjs(deadline).format(CARD_DATE_FORMAT)}
          </label>
          <input
            id={`checkDeadlineTodo${id}`}
            type='checkbox'
            checked={isCompleted}
            onChange={handleStatusChange}
            className='visually-hidden'
          />
        </div>
        <div className='todo-description'>
          <p>{description}</p>
        </div>
        <div className='todo-attachments'>{files}</div>
      </section>
    </article>
  );
};
