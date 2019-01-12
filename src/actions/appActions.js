import fetch from 'cross-fetch'

import {
    GET_MOVIES_BY_NAME_REQUEST,
    GET_MOVIES_BY_NAME_RESPONSE,
    EDIT_MOVIE,
    DELETE_MOVIE
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
        moviesArr
    }
}
export function fetchMovies(movieId){
    return dispatch => { 
        return Promise.all( movieId.map(id => {
            return  MoviesService.getMovieByImdbId(id)
        }))
        .then(moviesList => {
            dispatch({type: GET_MOVIES_BY_NAME_RESPONSE, payload: moviesList})
        });
}
}
export function editMovie(movieObj){
    return{
        type: EDIT_MOVIE,
        payload: movieObj
    }
}
export function deleteMovie(movieObj){
    return{
        type: DELETE_MOVIE,
        payload: movieObj
    }
}