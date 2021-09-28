import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import NavBar from './components/NavBar';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
      <NavBar />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
