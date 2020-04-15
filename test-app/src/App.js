import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import leon from './leon.jfif';
import julian from './julian.jfif';
import segal from './segal.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={leon}/>
        <p> Leon </p>
        <img src={julian}/>
        <p> Julian </p>
        <img src={segal}/>
        <p> Segal </p>
        <p>
          Team: Honey Badgers
        </p>
      </header>
    </div>
  );
}

export default App;
