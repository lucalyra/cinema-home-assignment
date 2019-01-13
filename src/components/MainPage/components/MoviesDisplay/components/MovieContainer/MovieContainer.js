import './MovieContainer.scss'
import React, { Component } from 'react'
import MovieEdit from './components/MovieEdit/MovieEdit'
import DeletePopup from './components/DeletePopup/DeletePopup'

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
        this.state = {
            isOptionOpen: false,
            isEditOpen: false,
            isDeleteOpen: false
        }
    }
    openOptions = () =>{ 
        this.setState({isOptionOpen: !this.state.isOptionOpen})
    }
    openEdit = (boolean) =>{
        if(boolean === true){
        this.setState({
            isOptionOpen: !this.state.isOptionOpen,
            isEditOpen: !this.state.isEditOpen  })
        } else {
            this.setState({
                isEditOpen: !this.state.isEditOpen  })
        }
    }
    deleteMovie = (boolean) =>{
        if(boolean){
            this.props.deleteMovie(this.props.movie)
            this.setState({isDeleteOpen: false})
        }   else { this.setState({isDeleteOpen: false}) }
        this.openOptions()

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
                    <i className="fas fa-ellipsis-h" onClick={this.openOptions}></i>
                    <div className={this.state.isOptionOpen ? "movie-options movie-options-open" : "movie-options"}>
                        <span className="options-btn" onClick={()=>this.openEdit(true)}>Edit</span>
                        <span className="options-btn" onClick={()=>this.setState({isDeleteOpen: true})}>Delete</span>
                    </div>
                </div>
            <MovieEdit isEditOpen={this.state.isEditOpen} openEdit={this.openEdit} movie={this.props.movie}/>
            <DeletePopup isDeleteOpen={this.state.isDeleteOpen} deleteMovie={this.deleteMovie} movie={this.props.movie}/>
            </div>   
        )
    }
    
}

const ConnectedMovieContainer = connect(null, mapDispatchToProps)(MovieContainer)
export default ConnectedMovieContainer

