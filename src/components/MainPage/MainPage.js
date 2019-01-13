import React, { Component } from 'react';
import './MainPage.scss';

import MoviesDisplay from './components/MoviesDisplay/MoviesDisplay'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
class MainPage extends Component {

  render() {
    return (
      <div className="main-page">
        <Header/>
        <MoviesDisplay/>
        <Footer/>
      </div>
    );
  }
}

export default MainPage;
