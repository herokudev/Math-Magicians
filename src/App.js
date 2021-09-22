/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Calculator />
      </div>
    );
  }
}

export default App;
