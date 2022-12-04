import React, { FC, useCallback, useState } from 'react';
// context
import { ModalContext } from 'context';
// components
import Header from './header';
import Main from './main';
import Footer from './footer';
import { Modal } from 'components';
// style
import './styles.css';
// utils
import type { ITodo } from 'utils/types';

const App: FC = () => {
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [modalContent, setModalContent] = useState<ITodo>();

  let handleModalClose = useCallback(() => {
    setModalContent(undefined);
    setIsModalOpen(false);
  }, []);

  let handleModalOpen = useCallback((content?: ITodo) => {
    setModalContent(content);
    setIsModalOpen(true);
  }, []);

  return (
    <div className='app__container'>
      <ModalContext.Provider
        value={{ isOpen: isModalOpen, close: handleModalClose, open: handleModalOpen }}
      >
        <Header />
        <Main />
        <Footer />
        <Modal isOpen={isModalOpen} onClose={handleModalClose} content={modalContent} />
      </ModalContext.Provider>
    </div>
  );
};

export default App;
