import './AddMovie.scss'
import React, { Component } from 'react'

import { connect } from "react-redux";
import {addMovie, idGene} from '../../../../actions/appActions'

const mapDispatchToProps = dispatch => { //push props to store
    return {
        addMovie: movieObj => dispatch(addMovie(movieObj)),
        idGene: () => dispatch(idGene())
        };
    };
const mapStateToProps = state => { //pull props from store
    return { 
        addId: state.addId
        };
    };  
class AddMovie extends Component{
    constructor(props){
        super(props)
         
        this.state = {
            "Title": "",
            "Year": "",
            "Runtime": "",
            "Genre": "",
            "Director": "",
        }
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        this.props.addMovie({
            "Title": this.state.Title,
            "Year": this.state.Year,
            "Runtime": this.state.Runtime,
            "Genre": this.state.Genre,
            "Director": this.state.Director,
            "imdbID": this.props.addId,
            "Poster": "https://i.imgur.com/Z2MYNbj.png/large_movie_poster.png"
        })
        this.props.idGene()
        event.preventDefault();
    }

    render(){
        return(
                <div className={this.props.addMovieOpen ? 'add-movie' : 'add-movie-input-closed'} >
                    <div className={'add-movie-input'}>
                        <h2>Add a Movie</h2>
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
                            <button type="button" onClick={this.props.toggleAddMovie}>Cancel</button>
                        </div>

                    </form>
                    </div>
            </div>
    )
    }
}
const ConnectedAddMovie = connect(mapStateToProps, mapDispatchToProps)(AddMovie)
export default ConnectedAddMovie


