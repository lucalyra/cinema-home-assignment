import './AddMovie.scss'
import React, { Component } from 'react'

import { connect } from "react-redux";
import {addMovie, idGene} from '../../../../actions/appActions'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

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
        this.props.toggleAddMovie()
        this.props.idGene()
        event.preventDefault()
    }

    render(){
        return(
            <div className='add-movie'>
                <Dialog open={this.props.addMovieOpen}>
                    <DialogTitle id="form-dialog-title">Add a Movie</DialogTitle>
                    <DialogContent>
                        <TextField autoFocus value={this.state.Title} margin="normal" name="Title" onChange={this.handleChange} label="Title" type="text" fullWidth/>
                        <TextField value={this.state.Year} margin="normal" name="Year" onChange={this.handleChange} label="Year" type="text" fullWidth/>
                        <TextField value={this.state.Runtime} margin="normal" name="Runtime" onChange={this.handleChange} label="Runtime" type="text" fullWidth/>
                        <TextField value={this.state.Genre} margin="normal" name="Genre" onChange={this.handleChange} label="Genre" type="text" fullWidth/>
                        <TextField value={this.state.Director} margin="normal" name="Director" onChange={this.handleChange} label="Director" type="text" fullWidth/>
                    </DialogContent>
                    <DialogActions>
                            <Button className="movie-edit-btn" onClick={this.handleSubmit} color="primary"> Send </Button>
                            <Button className="movie-edit-btn" onClick={this.props.toggleAddMovie} color="primary"> Cancel </Button>
                    </DialogActions>
                </Dialog>
            </div>
    )
    }
}
const ConnectedAddMovie = connect(mapStateToProps, mapDispatchToProps)(AddMovie)
export default ConnectedAddMovie
