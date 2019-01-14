import React, { Component } from 'react'
import AcceptEdit from './components/AcceptEdit/AcceptEdit'
import { connect } from "react-redux";
import {editMovie} from '../../../../../../../../actions/appActions'
import moviePipe from '../../../../../../../common/components/moviePipe'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

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
            moviePipe(this.state)
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
    handleCancel = () => {
        this.setState({ "Title": this.props.movie.Title, "Year": this.props.movie.Year, "Runtime": this.props.movie.Runtime, "Genre": this.props.movie.Genre, "Director": this.props.movie.Director})
        this.props.openEdit(false)
    }
    render(){
        return(
            <div className="movie-edit">
                <Dialog open={this.props.isEditOpen}>
                <DialogTitle id="form-dialog-title">Edit Movie</DialogTitle>
                <ValidatorForm className="add-movie-form" onSubmit={this.handleSubmit}>
                    <TextValidator  validators={['required', 'isString']} 
                                    value={this.state.Title}
                                    margin="normal" 
                                    name="Title" 
                                    onChange={this.handleChange} 
                                    label="Title" 
                                    type="text"
                                    errorMessages={['This field is required', 'Title is not valid']} 
                                    fullWidth
                                    />
                    <TextValidator  validators={['required', 'isNumber',"minNumber:1700"]} 
                                    value={this.state.Year} 
                                    margin= "normal"
                                    name="Year" 
                                    onChange={this.handleChange} 
                                    label="Year" 
                                    type="text"
                                    errorMessages={['This field is required', 'Year is not valid', 'Year is not valid']}
                                    fullWidth
                                    />
                    <TextValidator  validators={['required', 'isString']} 
                                    value={this.state.Runtime} 
                                    margin="normal" 
                                    name="Runtime" 
                                    onChange={this.handleChange} 
                                    label="Runtime" 
                                    type="text"
                                    errorMessages={['This field is required', 'Runtime is not valid']} 
                                    fullWidth
                                    />
                    <TextValidator  validators={['required', 'isString']} 
                                    value={this.state.Genre} 
                                    margin="normal" 
                                    name="Genre" 
                                    onChange={this.handleChange} 
                                    label="Genre" 
                                    type="text"
                                    errorMessages={['This field is required', 'Genre is not valid']} 
                                    fullWidth
                                    />
                    <TextValidator  validators={['required', 'isString']} 
                                    value={this.state.Director} 
                                    margin="normal" 
                                    name="Director" 
                                    onChange={this.handleChange} 
                                    label="Director" 
                                    type="text" 
                                    errorMessages={['This field is required', "Director's name is not valid"]} 
                                    fullWidth
                                    />
                    <DialogActions>
                        <Button className="movie-edit-btn" type="submit" color="primary"> Save </Button>
                        <Button className="movie-edit-btn" onClick={this.handleCancel} color="primary"> Cancel </Button>
                    </DialogActions>                       
                </ValidatorForm>
                </Dialog>
                <AcceptEdit state={this.state} editAccepted={this.editAccepted}/>
            </div>
        )
    }
    
}

const ConnectedMovieEdit = connect(null, mapDispatchToProps)(MovieEdit)
export default ConnectedMovieEdit
