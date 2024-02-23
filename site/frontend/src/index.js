import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import DashboardPage from './views/DashboardPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <DashboardPage />
  </React.StrictMode>
);
