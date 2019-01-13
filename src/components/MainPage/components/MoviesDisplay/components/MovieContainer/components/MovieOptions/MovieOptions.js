import './MovieOptions.scss'
import React, { Component } from 'react'
import MovieEdit from '../MovieEdit/MovieEdit'
import DeletePopup from '../DeletePopup/DeletePopup'

import { connect } from "react-redux";
import {deleteMovie} from '../../../../../../../../actions/appActions'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const mapDispatchToProps = dispatch => { //push props to store
    return {
        deleteMovie: movieObj => dispatch(deleteMovie(movieObj)),
    };
};

class MovieOptions extends Component{
    state = {
        anchorEl: null,
        isEditOpen: false,
        isDeleteOpen: false
    };
    
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    openEdit = (boolean) =>{
        if(boolean === true){
        this.setState({ isEditOpen: !this.state.isEditOpen })
        this.handleClose()
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
        this.handleClose()
    }
    render() {        
        return (
            <div className="movie-options">
                <i className="fas fa-ellipsis-v" onClick={this.handleClick}></i>
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={()=>this.openEdit(true)}>Edit</MenuItem>
                    <MenuItem onClick={()=>this.setState({isDeleteOpen: true})}>Delete</MenuItem>
                </Menu>
                <MovieEdit isEditOpen={this.state.isEditOpen} openEdit={this.openEdit} movie={this.props.movie}/>
                <DeletePopup isDeleteOpen={this.state.isDeleteOpen} deleteMovie={this.deleteMovie} movie={this.props.movie}/>
            </div>  
            )
        }
        
    }
    
    const ConnectedMovieOptions = connect(null, mapDispatchToProps)(MovieOptions)
    export default ConnectedMovieOptions
    
    