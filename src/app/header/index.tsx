import React, { FC } from 'react';
// style
import './styles.css';

const Header: FC = () => {
  return (
    <header className='app__header'>
      <h2 className='app__title'>Todo List App</h2>
    </header>
  );
};

export default Header;
