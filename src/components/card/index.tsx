import React, { FC, useState } from 'react';
// style
import './index.css';
// utils
import type { ITodo } from 'utils/types';

type CardProps = {
  todo: ITodo;
};

export const Card: FC<CardProps> = ({ todo }) => {
  let [isCompleted, setIsCompleted] = useState(false);
  return (
    <li className='todo-list__item'>
      <article className={`todo ${isCompleted && 'todo_completed'}`}>
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
            <h4 className={`todo__title ${isCompleted && 'todo__title_crossed-out'}`}>
              {todo.title}
            </h4>
          </span>

          <span>
            <button className='todo__button edit-button' />
            <button className='todo__button delete-button' />
          </span>
        </header>
        <main>
          <p>{todo.description}</p>
          <p>{todo.deadline}</p>
          <div>{todo.files}</div>
        </main>
      </article>
    </li>
  );
};
