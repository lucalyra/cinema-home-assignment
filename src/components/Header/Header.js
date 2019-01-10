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
                <span className="title">Cinema</span>
                <div className="header-options">
                    Search:
                    <input className="search-input" type="search" placeholder="Crime"/>
                    <button className="add-btn header-btm" onClick={this.toggleAddMovie}> + </button>
                </div>
                <AddMovie addMovieOpen={this.state.addMovieOpen} toggleAddMovie={this.toggleAddMovie}/>
            </div>
    )
    }
}
export default Header



