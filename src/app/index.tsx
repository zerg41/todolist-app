import React, { FC, useState } from 'react';
// components
import Header from './header';
import Footer from './footer';
import { Modal, CardList, Button } from 'components';
// style
import './styles.css';
// TEMP
import { mockTodos } from 'utils/mock';

const App: FC = () => {
  let [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddButtonClick() {
    setIsModalOpen(false);
  }

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  return (
    <div className='app__container'>
      <Header />
      <main className='app__content'>
        <Button onClick={handleModalOpen} className='app__add-todo-button'>
          Add New Todo
        </Button>
        <CardList todos={mockTodos} />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onAccept={handleAddButtonClick} onClose={handleModalClose} />
    </div>
  );
};

export default App;
