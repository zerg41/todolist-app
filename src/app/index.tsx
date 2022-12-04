import React, { FC, useCallback, useMemo, useState } from 'react';
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

  let modalContextValue = useMemo(() => {
    return {
      open: (content?: ITodo) => {
        setModalContent(content);
        setIsModalOpen(true);
      },
    };
  }, []);

  return (
    <div className='app__container'>
      <Header />
      <ModalContext.Provider value={modalContextValue}>
        <Main />
      </ModalContext.Provider>
      <Footer />
      <Modal isOpen={isModalOpen} content={modalContent} onClose={handleModalClose} />
    </div>
  );
};

export default App;
