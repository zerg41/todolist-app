import { FC, useEffect, useMemo, useState } from 'react';
// components
import { Card } from 'components';
// style
import './styles.css';
// utils
import type { IMockData, ITodo } from 'utils/types';
import { TodoSelectionOptions } from 'utils/constants';
import dayjs from 'dayjs';

type CardListProps = {
  filter?: string;
};

export const CardList: FC<CardListProps> = ({ filter }) => {
  let [allTodos, setAllTodos] = useState<ITodo[]>([]);

  let filteredTodos: ITodo[] = useMemo(() => {
    let todos = allTodos;

    switch (filter as typeof TodoSelectionOptions[keyof typeof TodoSelectionOptions]) {
      case 'all':
        todos = allTodos;
        break;
      case 'completed':
        todos = allTodos.filter((todo) => todo.completed === true);
        break;
      case 'unfinished':
        todos = allTodos.filter((todo) => todo.completed === false);
        break;
    }

    return todos.slice(0, 10);
  }, [allTodos, filter]);

  useEffect(() => {
    if (allTodos.length) {
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
          setAllTodos((todos) => [
            ...todos,
            {
              id: item.id,
              title: item.title,
              deadline: dayjs().format(),
              completed: item.completed,
            },
          ]);
        })
      );
  }, [allTodos]);

  let renderTodos = useMemo(() => {
    return filteredTodos?.map((todo, index) => (
      <li key={`todo-${todo.id}`} className='todo-list__item'>
        <Card todo={todo} />
      </li>
    ));
  }, [filteredTodos]);

  return <ul className='todo-list'>{renderTodos}</ul>;
};
