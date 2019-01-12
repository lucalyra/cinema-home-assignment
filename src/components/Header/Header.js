import './Header.scss'
import React, { Component } from 'react'
import AddMovie from './components/AddMovie/AddMovie'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            addMovieOpen: false
        }
    }
    toggleAddMovie = () => {
        this.setState( { addMovieOpen: !this.state.addMovieOpen } )
    }
    render(){
     
        return(
            <div className="header">
                <div className="header-background">
                    <div className="top-header">
                        <div className="header-link-container">
                            <div className="header-link-btn" onClick={()=>window.scrollTo(0,0)}>
                                <span className="header-link-text"> Home </span>
                            </div>
                            <div className="header-link-btn">
                                <span className="header-link-text" onClick={this.toggleAddMovie}> Add Movies </span>
                            </div>
                        </div>
                    </div>
                        <div className="header-info">
                            <span className="header-title">Cinema</span>
                            <span className="header-description">Your Movie Database Organizer</span>
                        </div>
                    <AddMovie addMovieOpen={this.state.addMovieOpen} toggleAddMovie={this.toggleAddMovie}/>
                </div>
            </div>
    )   }
}
export default Header



