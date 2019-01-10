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
                <div className="movie-picture" style={{backgroundImage: `url(${this.props.movie.Poster})`}}></div>
                <div className="movie-container-bottom">
                    <div className="movie-info">
                        <span className="movie-title">{this.props.movie.Title}</span>
                        <span className="movie-year">{this.props.movie.Year}</span>
                    </div>
                    <i class="fas fa-ellipsis-h" onClick={this.openOptions}></i>
                    <div className={this.state.isOpen ? "movie-options movie-options-open" : "movie-options"}>
                        <span className="options-btn">Edit</span>
                        <span className="options-btn">Delete</span>
                    </div>
                </div>
            </div>   
        )
    }
}

export default MovieContainer