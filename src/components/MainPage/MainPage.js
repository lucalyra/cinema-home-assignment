import './MainPage.scss'
import React, { Component } from 'react'

import MovieService from '../../services/MovieService'
import MovieContainer from './components/MovieContainer/MovieContainer'

class MainPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        MovieService.getMovieListByName("crime")
            .then(res => this.setState( { movies: res.data.Search } ) )
    }
    render(){
        
        return(
                <div className="main-page">
                   {this.state.movies.map(movie => 
                        <MovieContainer movie={movie}/>
                    )}
                </div>
        )
    }
}

export default MainPage