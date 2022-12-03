import React, { FC, useEffect, useMemo, useState } from 'react';
// components
import Header from './header';
import Footer from './footer';
import { Modal, CardList, Button } from 'components';
// style
import './styles.css';
// TEMP
import { mockTodos } from 'utils/mock';
import { ITodo } from 'utils/types';
import dayjs from 'dayjs';

enum SelectedTodos {
  ALL = 'all',
  COMPLETED = 'completed',
  UNFINISHED = 'unfinished',
}
interface IMockData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const App: FC = () => {
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [todos, setTodos] = useState<ITodo[]>([]);
  let [filter, setFilter] = useState<
    SelectedTodos.ALL | SelectedTodos.COMPLETED | SelectedTodos.UNFINISHED
  >(SelectedTodos.ALL);

  let filteredTodos: ITodo[] = useMemo(() => {
    switch (filter) {
      case SelectedTodos.ALL:
        return todos;
      case SelectedTodos.COMPLETED:
        return todos.filter((todo) => todo.completed === true);
      case SelectedTodos.UNFINISHED:
        return todos.filter((todo) => todo.completed === false);
    }
  }, [todos, filter]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('No Data');
      })
      .then((mockData) =>
        mockData.slice(0, 5).forEach((item: IMockData) => {
          setTodos((todos) => [
            ...todos,
            {
              id: item.id,
              title: item.title,
              deadline: dayjs().toJSON(),
              completed: item.completed,
            },
          ]);
        })
      );

    return () => {
      setTodos([]);
    };
  }, []);

  function handleAddButtonClick() {
    setIsModalOpen(false);
  }

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  function handleFilterChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    console.log(evt.target.value);
    setFilter(evt.target.value as SelectedTodos);
  }

  return (
    <div className='app__container'>
      <Header />
      <main className='app__content'>
        <div className='app__toolbar'>
          <span className='toolbar__selector '>
            <label htmlFor='todo-select'>Todo Filter:</label>
            <select id='todo-select' onChange={(evt) => handleFilterChange(evt)}>
              <option value={SelectedTodos.ALL}>All</option>
              <option value={SelectedTodos.COMPLETED}>Completed</option>
              <option value={SelectedTodos.UNFINISHED}>Unfinished</option>
            </select>
          </span>
          <Button
            text='Add New Todo'
            variation='primary'
            className='toolbar__button'
            onClick={handleModalOpen}
          />
        </div>
        <CardList todos={filteredTodos} />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onAccept={handleAddButtonClick} onClose={handleModalClose} />
    </div>
  );
};

export default App;
