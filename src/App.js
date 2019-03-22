import React, { Component } from 'react';
import './App.css';

//CUSTOM COMPONENT
import Header from './component/Header/Header';
import routes from './routes';


class App extends Component {
  render() {
    return (
        <main className='main'>
          <Header />
          {routes}
        </main>
    );
  }
}

export default App;
