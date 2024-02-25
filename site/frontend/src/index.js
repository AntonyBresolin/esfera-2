import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import { Authenticate } from './services/Authenticate';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode >
      <Authenticate />
    </React.StrictMode>
);
