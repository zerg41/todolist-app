import { FC } from 'react';
// components
import { Card } from 'components/card';
// style
import './index.css';
// utils
import type { ITodo } from 'utils/types';

export type CardListProps = {
  todos?: ITodo[];
};

export const CardList: FC<CardListProps> = ({ todos }) => {
  return (
    <ul className='todo-list'>
      {todos?.map((todo, index) => (
        <Card key={`todo-${index}`} todo={todo} />
      ))}
    </ul>
  );
};
