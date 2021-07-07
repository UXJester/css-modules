import React from 'react';
import logo from './logo.svg';
import { SimpleComponent } from './components/SimpleComponent';
import { OtherComponent } from './components/OtherComponent';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SimpleComponent />
      <OtherComponent />
    </div>
  );
}

export default App;
