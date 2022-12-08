import React, { FC } from 'react';
// style
import './styles.css';

const Header: FC = React.memo(() => {
  return (
    <header className='app-header'>
      <h2 className='app-header__title'>Todo List App</h2>
    </header>
  );
});

export default Header;
