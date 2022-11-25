import { FC } from 'react';
// components
import { Card } from 'components';
// style
import './index.css';
// utils
import type { ITodo } from 'utils/types';

type CardListProps = {
  todos?: ITodo[];
};

export const CardList: FC<CardListProps> = ({ todos }) => {
  return (
    <ul className='todo-list'>
      {todos?.map((todo, index) => (
        <Card key={`todo-${todo.id}`} todo={todo} />
      ))}
    </ul>
  );
};
