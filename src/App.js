import React, { Component } from 'react';
import './App.scss';

import MainPage from './components/MainPage/MainPage'
import Header from './components/Header/Header'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <MainPage/>
      </div>
    );
  }
}

export default App;
