import React, { Component } from 'react';
import './App.css';

//CUSTOM COMPONENT
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from "./component/Wizard/Wizard";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
        <Wizard />
      </div>
    );
  }
}

export default App;
