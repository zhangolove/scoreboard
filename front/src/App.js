import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardGrid from './components/CardGrid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chris's Scoreboard</h1>
        </header>
        <CardGrid/>
      </div>
    );
  }
}

export default App;
