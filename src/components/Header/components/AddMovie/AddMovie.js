import './AddMovie.scss'
import React, { Component } from 'react'
import { connect } from "react-redux";
import {addMovie, idGene} from '../../../../actions/appActions'
import {noDuplicate,DuplicateAlert} from './components/Duplicate'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const mapDispatchToProps = dispatch => { //push props to store
    return {
        addMovie: movieObj => dispatch(addMovie(movieObj)),
        idGene: () => dispatch(idGene())
        };
    };
    
const mapStateToProps = state => { //pull props from store
    return { 
        addId: state.addId,
        moviesArr: state.moviesArr
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
            "isDuplicate": false
        }
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        if(noDuplicate(this.state, this.props.moviesArr) > 0){
            this.setState({isDuplicate: true}) 
        } else {
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
            this.setState({ "Title": "", "Year": "", "Runtime": "", "Genre": "", "Director": ""})
        }
        event.preventDefault()
    }
    closeDuplicate = () =>{
        this.setState({isDuplicate: false})
    }
    render(){
        return(
            <div className='add-movie'>
                <Dialog open={this.props.addMovieOpen}>
                    <DialogTitle className="add-movie-title">Add a Movie</DialogTitle>
                    <DialogContentText className="add-movie-description">
                        Please fill all the fields.
                    </DialogContentText>
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
                            <Button className="movie-edit-btn" type="submit" color="primary"> Send </Button>
                            <Button className="movie-edit-btn" onClick={this.props.toggleAddMovie} color="primary"> Cancel </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
                <DuplicateAlert state={this.state} closeDuplicate={this.closeDuplicate}/>
            </div>
    )
    }
}
const ConnectedAddMovie = connect(mapStateToProps, mapDispatchToProps)(AddMovie)
export default ConnectedAddMovie
