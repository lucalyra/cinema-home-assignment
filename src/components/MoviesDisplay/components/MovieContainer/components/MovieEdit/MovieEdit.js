import './MovieEdit.scss'
import React, { Component } from 'react'
import AcceptEdit from './components/AcceptEdit/AcceptEdit'
import { connect } from "react-redux";
import {editMovie} from '../../../../../../actions/appActions'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

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
               openAlert: false
        }
    }
    editAccepted = (boolean) =>{
        if(boolean){
            this.props.editMovie({
                "Title": this.state.Title,
                "Year": this.state.Year,
                "Runtime": this.state.Runtime,
                "Genre": this.state.Genre,
                "Director": this.state.Director,
                "imdbID": this.props.movie.imdbID
            })
            this.setState({openAlert: false})
            this.props.openEdit(false)
        } else {this.setState({openAlert: false})
    }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        this.setState({openAlert: true})
        event.preventDefault();
    }
    render(){
        return(
            <div className="movie-edit">
                <Dialog open={this.props.isEditOpen}>
                <DialogTitle id="form-dialog-title">Edit Movie</DialogTitle>
                <DialogContent>
                    <TextField autoFocus value={this.state.Title} margin="normal" name="Title" onChange={this.handleChange} label="Title" type="text" fullWidth/>
                    <TextField value={this.state.Year} margin="normal" name="Year" onChange={this.handleChange} label="Year" type="text" fullWidth/>
                    <TextField value={this.state.Runtime} margin="normal" name="Runtime" onChange={this.handleChange} label="Runtime" type="text" fullWidth/>
                    <TextField value={this.state.Genre} margin="normal" name="Genre" onChange={this.handleChange} label="Genre" type="text" fullWidth/>
                    <TextField value={this.state.Director} margin="normal" name="Director" onChange={this.handleChange} label="Director" type="text" fullWidth/>
                </DialogContent>
                <DialogActions>
                        <Button className="movie-edit-btn" onClick={this.handleSubmit} color="primary"> Send </Button>
                        <Button className="movie-edit-btn" onClick={()=>this.props.openEdit(false)} color="primary"> Cancel </Button>
                </DialogActions>
                </Dialog>
                <AcceptEdit state={this.state} editAccepted={this.editAccepted}/>
            </div>
        )
    }
    
}

const ConnectedMovieEdit = connect(null, mapDispatchToProps)(MovieEdit)
export default ConnectedMovieEdit
