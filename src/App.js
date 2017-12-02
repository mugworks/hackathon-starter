import React, { Component } from 'react';
import Donations from './categories/Donations';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Donating Milk</h1>
          <img className="logo" src="/images/milkbanklogo.png" alt="logo" height="40px"/>
        </header>
        <Donations/>
      </div>
    );
  }
}

export default App;