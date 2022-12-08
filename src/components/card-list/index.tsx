import { FC, useEffect, useMemo, useState } from 'react';
// components
import { Card } from 'components';
// style
import './styles.css';
// utils
import dayjs from 'dayjs';
import { TodoSelectionOptions } from 'utils/constants';
import type { IMockData, ITodo } from 'utils/types';

type CardListProps = {
  filter?: string;
};

export const CardList: FC<CardListProps> = ({ filter }) => {
  let [todos, setTodos] = useState<ITodo[]>([]);

  /** Get Todos From Remote Server **/
  useEffect(() => {
    if (todos.length) {
      return;
    }

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('No Data');
      })
      .then((mockData) =>
        mockData.slice(0, 10).forEach((item: IMockData) => {
          setTodos((todos) => [
            ...todos,
            {
              id: item.id,
              title: item.title,
              deadline: dayjs().format(),
              completed: item.completed,
            },
          ]);
        })
      )
      .catch((err) => alert(err));
  }, [todos]);

  let filteredTodos = filterTodos(todos, filter).map((todo) => (
    <li key={`todo-${todo.id}`} className='todo-list__list-item'>
      <Card todo={todo} />
    </li>
  ));

  useEffect(() => {
    console.log('toodlist render');
  });

  return (
    <section className='todo-list'>
      <ul className='todo-list__list'>{filteredTodos}</ul>
    </section>
  );
};

function filterTodos(todos: ITodo[], filter?: string) {
  if (filter) {
    switch (filter as typeof TodoSelectionOptions[keyof typeof TodoSelectionOptions]) {
      case 'all':
        break;
      case 'completed':
        todos = todos.filter((todo) => todo.completed === true);
        break;
      case 'unfinished':
        todos = todos.filter((todo) => todo.completed === false);
        break;
    }
  }

  return todos;
}
