import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class DeletePopup extends Component{
   constructor(props){
       super(props)
       this.state = {
           isOpen: false
       }
   }

    render(){
        return(
            <div className="delete-popup">
            <Dialog open={this.props.isDeleteOpen}>
                <DialogTitle>{"Want to delete?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete "{this.props.movie.Title}"?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>this.props.deleteMovie(false)}>
                        No
                    </Button>
                    <Button onClick={()=>this.props.deleteMovie(true)}>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>  
            </div>
        )
    }
    
}

export default DeletePopup
