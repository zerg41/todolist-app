import React from 'react';
import ReactDOM from 'react-dom/client';
// components
import App from 'app';
// style
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
