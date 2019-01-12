import { 
  GET_MOVIES_BY_NAME_RESPONSE,
  GET_MOVIES_BY_NAME_REQUEST,
  EDIT_MOVIE,
  DELETE_MOVIE
} from "../actions/action-types";

export const initialState = {
  moviesId: ["tt1987680","tt1987682","tt4154916","tt7616798","tt6101820","tt4154916","tt1650060"],
  moviesArr: [],
  fetching: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_BY_NAME_REQUEST: // Fetch movies
      return {
        fetching: true
      };
    case GET_MOVIES_BY_NAME_RESPONSE:
      return {
        ...state,
        moviesArr: action.payload,
        fetching: false
      }
      case EDIT_MOVIE:
      return{
        ...state, 
        moviesArr: state.moviesArr.map(movie => {
            if (movie.data.imdbID === action.payload.imdbID) {
              movie.data = {...movie.data, ...action.payload}
              return movie
            }
              return movie
        }   )
      }
      case DELETE_MOVIE:
      return{
      ...state,
      moviesArr: [...state.moviesArr.slice(0,state.moviesArr.findIndex(movie => movie.data.imdbID === action.payload.imdbID)),
                  ...state.moviesArr.slice(state.moviesArr.findIndex(movie => movie.data.imdbID === action.payload.imdbID)+1)]
      }

    default:
      return state;
  }
};

export default appReducer;