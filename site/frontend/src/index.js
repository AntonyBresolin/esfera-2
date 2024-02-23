import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import LoginPage from './views/LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);
