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
                <div className="movie-info">
                    <div className="movie-info-header">
                        <span className="movie-info-header-text movie-title-year">{this.props.movie.Title} ({this.props.movie.Year})</span>
                        <MovieOptions movie={this.props.movie}/>
                    </div>
                    <span className="movie-info-text movie-runtime-genre">{this.props.movie.Runtime} | {this.props.movie.Genre}</span>
                    <span className="movie-info-text movie-desc">{this.props.movie.Plot}</span>
                    <span className="movie-info-text movie-director">Director: {this.props.movie.Director}</span>
                </div>
            </div>   
        )
    }
    
}

const ConnectedMovieContainer = connect(null, mapDispatchToProps)(MovieContainer)
export default ConnectedMovieContainer

