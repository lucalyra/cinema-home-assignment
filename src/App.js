import React, { Component } from 'react';
import './App.scss';

import MoviesDisplay from './components/MoviesDisplay/MoviesDisplay'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <Header/>
        <MoviesDisplay/> */}
        <MainPage/>
      </div>
    );
  }
}

export default App;
