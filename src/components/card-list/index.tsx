import { FC, useMemo } from 'react';
// components
import { Card } from 'components';
// style
import './styles.css';
// utils
import type { ITodo } from 'utils/types';

type CardListProps = {
  todos?: ITodo[];
};

export const CardList: FC<CardListProps> = ({ todos }) => {
  let renderTodos = useMemo(() => {
    console.log('todos=', todos);

    return todos?.map((todo, index) => (
      <Card key={`todo-${todo.id}-${Math.random()}`} todo={todo} />
    ));
  }, [todos]);

  return <ul className='todo-list'>{renderTodos}</ul>;
};
