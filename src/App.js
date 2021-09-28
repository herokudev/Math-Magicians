import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import './App.css';

const App = () => (
  <>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/calculator/">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <h2
            style={{
              paddingRight: '10em',
            }}
          >
            Let&apos;s do some math!
          </h2>
          <div className="app-container">
            <Calculator />
          </div>
        </div>
      </Route>
      <Route path="/quote/">
        <Quote />
      </Route>
    </Switch>
  </>
);

export default App;
