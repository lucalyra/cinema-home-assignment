import React, { Component } from 'react';
import './MainPage.scss';

import MoviesDisplay from '../MoviesDisplay/MoviesDisplay'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
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
