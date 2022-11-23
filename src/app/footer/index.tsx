import React, { FC } from 'react';
// style
import './styles.css';

const Footer: FC = () => {
  return (
    <footer className='app__footer'>
      <span style={{ textAlign: 'center' }}>
        Background Image by{' '}
        <a href='https://www.freepik.com/free-vector/white-abstract-background_11771164.htm#query=abstract%20background&position=42&from_view=search&track=sph'>
          Freepik
        </a>
        <br />
        <a target='_blank' href='https://icons8.com/icon/83238/remove' rel='noreferrer'>
          Remove
        </a>{' '}
        ,{' '}
        <a target='_blank' href='https://icons8.com/icon/85934/pencil' rel='noreferrer'>
          Pencil
        </a>{' '}
        ,{' '}
        <a target='_blank' href='https://icons8.com/icon/82771/close' rel='noreferrer'>
          Close
        </a>{' '}
        Icons by{' '}
        <a target='_blank' href='https://icons8.com' rel='noreferrer'>
          Icons8
        </a>
      </span>
      <span>
        © Made by <a href='https://github.com/zerg41'>zerg41</a> in 2022
      </span>
    </footer>
  );
};

export default Footer;
