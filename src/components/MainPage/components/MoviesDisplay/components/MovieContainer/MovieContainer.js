import './MovieContainer.scss'
import React, { Component } from 'react'
import MovieEdit from './components/MovieEdit/MovieEdit'
import DeletePopup from './components/DeletePopup/DeletePopup'
import MovieOptions from './components/MovieOptions/MovieOptions'

import { connect } from "react-redux";
import {deleteMovie} from '../../../../../../actions/appActions'

const mapDispatchToProps = dispatch => { //push props to store
    return {
        deleteMovie: movieObj => dispatch(deleteMovie(movieObj)),
        };
    };

class MovieContainer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="movie-container">
                <div className="movie-picture" style={{backgroundImage: `url(${this.props.movie.Poster})`}}></div>
                <div className="movie-container-bottom">
                    <div className="movie-info">
                        <span className="movie-title">{this.props.movie.Title}</span>
                        <span className="movie-year">{this.props.movie.Year}</span>
                    </div>
                <MovieOptions movie={this.props.movie}/>
                </div>
            </div>   
        )
    }
    
}

const ConnectedMovieContainer = connect(null, mapDispatchToProps)(MovieContainer)
export default ConnectedMovieContainer

