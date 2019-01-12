import './MainPage.scss'
import React, { Component } from 'react'

import MovieContainer from './components/MovieContainer/MovieContainer'

import { connect } from "react-redux";
import {fetchMovies} from '../../actions/appActions'

const mapDispatchToProps = dispatch => { //push props to store
    return {
        fetchMovies: movieList => dispatch(fetchMovies(movieList)),
        };
    };
const mapStateToProps = state => { //pull props from store
    return { 
        moviesId: state.moviesId,
        moviesArr: state.moviesArr,
        fetching: state.fetching
        };
    };  
      
class MainPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            movies: [],
        }
    }
    componentWillMount(){
        this.props.fetchMovies(this.props.moviesId)
    }
    
    render(){
        return(
                <div className="main-page">
                    { this.props.moviesArr.map( movie => <MovieContainer movie={movie.data}/> ) }
                </div>
        )
    }
}
const ConnectedMainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage)
export default ConnectedMainPage


