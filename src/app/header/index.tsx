import React, { FC, useEffect } from 'react';
// style
import './styles.css';

const Header: FC = React.memo(() => {
  return (
    <header className='app__header'>
      <h2 className='app__title'>Todo List App</h2>
    </header>
  );
});

export default Header;
