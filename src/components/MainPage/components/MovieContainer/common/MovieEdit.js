import './MovieEdit.scss'
import React, { Component } from 'react'

import { connect } from "react-redux";
import {editMovie} from '../../../../../actions/appActions'

const mapDispatchToProps = dispatch => { //push props to store
    return {
        editMovie: movieObj => dispatch(editMovie(movieObj)),
        };
    };

class MovieEdit extends Component{
    constructor(props){
        super(props)
        this.state = { 
               Title: this.props.movie.Title,
               Year: this.props.movie.Year,
               Runtime: this.props.movie.Runtime,
               Genre: this.props.movie.Genre,
               Director: this.props.movie.Director,
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        this.props.editMovie({
            "Title": this.state.Title,
            "Year": this.state.Year,
            "Runtime": this.state.Runtime,
            "Genre": this.state.Genre,
            "Director": this.state.Director,
            "imdbID": this.props.movie.imdbID
        })
        this.props.openEdit(false)
        event.preventDefault();
    }
    render(){
        return(
            <div className={this.props.isEditOpen ? "movie-edit-container movie-edit-open" : "movie-edit-container"}>
                <div className="movie-edit-box">
                    <h2>Edit Movie Details</h2>
                    <form className="movie-edit-input" onSubmit={this.handleSubmit}>
                        <label>
                            Title:
                            <input type="text" value={this.state.Title} name="Title" onChange={this.handleChange}/>
                        </label>
                        <label>
                            Year:
                            <input type="year" value={this.state.Year} name="Year" onChange={this.handleChange}/>
                        </label>
                        <label>
                            Runtime:
                            <input type="text" value={this.state.Runtime} name="Runtime" onChange={this.handleChange}/>
                        </label>
                        <label>
                            Genre:
                            <input type="text" value={this.state.Genre} name="Genre" onChange={this.handleChange}/>
                        </label>
                        <label>
                            Director:
                            <input type="text" value={this.state.Director} name="Director" onChange={this.handleChange}/>
                        </label>
                        <div className="movie-edit-btns">
                            <button type="submit">Submit</button> 
                            <button type="button" onClick={()=>this.props.openEdit(false)}>Cancel</button>
                        </div>

                    </form>
                </div>
            </div>   
        )
    }
    
}

const ConnectedMovieEdit = connect(null, mapDispatchToProps)(MovieEdit)
export default ConnectedMovieEdit
