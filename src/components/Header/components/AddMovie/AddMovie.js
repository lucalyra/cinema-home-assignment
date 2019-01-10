import './AddMovie.scss'
import React, { Component } from 'react'

class AddMovie extends Component{

    render(){
        
        return(
            // this.props.playing ? 'pause' : 'play'
                <div className={this.props.addMovieOpen ? 'add-movie' : 'add-movie-input-closed'} >
                    <div className={'add-movie-input'}>
                        <h2>Add a Movie</h2>
                        <span>Title:</span>
                        <input type="text" placeholder="Fight Club"/>
                        <span>Year:</span>
                        <input type="text" placeholder="1999"/>
                        <span>Runtime:</span>
                        <input type="text" placeholder="151 min"/>
                        <span>Genre:</span>
                        <input type="text" placeholder="Drama"/>
                        <span>Director:</span>
                        <input type="text" placeholder="David Fincher"/>
                        <div className="add-movie-btn">
                            <button>Add</button>
                            <button onClick={this.props.toggleAddMovie}>Close</button>
                        </div>
                    </div>
            </div>
    )
    }
}
export default AddMovie



