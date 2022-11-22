import React, { FC, useState } from 'react';
// components
import { Modal } from 'components/modal';
// style
import './index.css';
import { CardList } from 'components/card-list';
import { ITodo } from 'utils/types';

const mockTodos: ITodo[] = [
  {
    title: 'Mock Task',
    description: 'something important',
    deadline: '2022-10-21 12:00:31',
    files: [],
  },
  {
    title: 'Mock Task',
    description: 'something important',
    deadline: '2022-10-21 12:00:31',
    files: [],
  },
  {
    title: 'Mock Task',
    description: 'something important',
    deadline: '2022-10-21 12:00:31',
    files: [],
  },
  {
    title: 'Mock Task',
    description: 'something important',
    deadline: '2022-10-21 12:00:31',
    files: [],
  },
  {
    title: 'Mock Task',
    description: 'something important',
    deadline: '2022-10-21 12:00:31',
    files: [],
  },
];

const App: FC = () => {
  let [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddButtonClick() {
    setIsModalOpen(false);
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  return (
    <div className='app__container'>
      <header className='app__header'>
        <h2 className='app__title'>Todo List App</h2>
        <p>Today is: </p>
      </header>
      <main className='app__content'>
        <form>
          <input type='text' placeholder='New task...' />
          <button type='button' onClick={() => setIsModalOpen(true)}>
            Add New Todo
          </button>
        </form>
        <CardList todos={mockTodos} />
      </main>
      <footer className='app__footer'>
        <span>
          Background Image by{' '}
          <a href='https://www.freepik.com/free-vector/white-abstract-background_11771164.htm#query=abstract%20background&position=42&from_view=search&track=sph'>
            Freepik
          </a>
          {' | '}
          <a target='_blank' href='https://icons8.com/icon/85934/pencil'>
            Pencil
          </a>{' '}
          icon by{' '}
          <a target='_blank' href='https://icons8.com'>
            Icons8
          </a>
        </span>
        <span>
          © Made by <a href='https://github.com/zerg41'>zerg41</a> in 2022
        </span>
      </footer>
      <Modal isOpen={isModalOpen} onAccept={handleAddButtonClick} onClose={handleModalClose} />
    </div>
  );
};

export default App;
