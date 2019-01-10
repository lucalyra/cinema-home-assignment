import {
    GET_MOVIES_BY_NAME_REQUEST,
    GET_MOVIES_BY_NAME_RESPONSE
} from "./action-types";
import MoviesService from "../../services/MoviesService" 

export function getMovies(moviesService = MoviesService){
    return dispatch => {
        dispatch( { type: GET_MOVIES_BY_NAME_REQUEST} );
        moviesService.getMovies()
            .then( movies => dispatch( { type: GET_MOVIES_BY_NAME_RESPONSE, movies} ) )
    }
}
