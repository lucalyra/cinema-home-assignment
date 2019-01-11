import './MainPage.scss'
import React, { Component } from 'react'

import MovieService from '../../services/MovieService'
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
        // MovieService.getMovieListByName("crime")
        //     .then(res => this.setState( { movies: res.data.Search } ) )
        console.log(this.props.moviesArr)
        this.props.fetchMovies(this.props.moviesId)

    }
    // componentDidUpdate(prevProps){
    //     if(prevProps.moviesArr !== this.props.moviesArr){
    //         return this.setState({movies: this.props.moviesArr})
    //     }
    // }
  


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


