import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AcceptEdit extends Component{
   constructor(props){
       super(props)
       this.state = {
           isOpen: false
       }
   }

    render(){
        return(
            <div className="accept-edit">
            <Dialog open={this.props.state.openAlert}>
                <DialogTitle>{"Ready to send?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to update this movie?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>this.props.editAccepted(true)}>
                        Yes
                    </Button>
                    <Button onClick={()=>this.props.editAccepted(false)}>
                        No
                    </Button>
                </DialogActions>
            </Dialog>  
            </div>
        )
    }
    
}

export default AcceptEdit
