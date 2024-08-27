import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import default or global CSS if you have
import './styles.css'; // Import your custom styles
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
