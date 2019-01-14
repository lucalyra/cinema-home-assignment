import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export function noDuplicate(newMovie, movieArr ){
    let num = 0 
    movieArr.map(movie => { 
        if(movie.data.Title === newMovie.Title){ return num++ } 
    } )
    return num
}

export class DuplicateAlert extends Component{

    render(){
        return(
            <div className="duplicate-popup">
                <Dialog open={this.props.state.isDuplicate}>
                    <DialogTitle>{"Duplicate"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Sorry but the movie "{this.props.state.Title}" already exists in the database.
                            Try adding another movie.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.closeDuplicate}>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>  
            </div>
        )
    }
}