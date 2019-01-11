import fetch from 'cross-fetch'

import {
    GET_MOVIES_BY_NAME_REQUEST,
    GET_MOVIES_BY_NAME_RESPONSE
} from "./action-types";

import MoviesService from "../services/MovieService" 

export function getMoviesRequest(){
    return {
        type: GET_MOVIES_BY_NAME_REQUEST
    }
}
export function getMoviesReceive(moviesArr){
    return {
        type: GET_MOVIES_BY_NAME_RESPONSE,
        payload: moviesArr
    }
}
export function fetchMovies(movieId){
    let moviesList = []
    return dispatch => {
        dispatch(getMoviesRequest())
        movieId.map(id => {
            MoviesService.getMovieByImdbId(id)
            .then(res => moviesList = moviesList.concat([res.data]) )

        })
        return dispatch(getMoviesReceive(moviesList))
      }
    }
