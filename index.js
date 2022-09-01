import React from 'react';
import ReactDOM from 'react-dom/client';
import './TicTacToe';
import TicTacToe from './TicTacToe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TicTacToe />
  </React.StrictMode>
);

