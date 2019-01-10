import './MovieContainer.scss'
import React, { Component } from 'react'

class MovieContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }
    openOptions = () =>{ 
        this.setState({isOpen: !this.state.isOpen})
    }
    render(){
        return(
            <div className="movie-container">
                <div className="movie-picture" style={{backgroundImage: `url(${this.props.movie.Poster})`}}>
                    <div className={this.state.isOpen ? "movie-options movie-options-open"  : "movie-options"} >
                        <i class="fas fa-ellipsis-h " onClick={this.openOptions}></i>
                        <button className="movie-options-delete">Delete</button>
                        <button className="movie-options-edit">Edit</button>
                    </div>
                </div>
                <span className="movie-title">{this.props.movie.Title}</span>
                <span className="movie-year">{this.props.movie.Year}</span>
            </div>   
        )
    }
}

export default MovieContainer