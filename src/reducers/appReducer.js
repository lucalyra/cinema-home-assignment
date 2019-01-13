import { 
  GET_MOVIES_BY_NAME_RESPONSE,
  GET_MOVIES_BY_NAME_REQUEST,
  EDIT_MOVIE,
  DELETE_MOVIE,
  ADD_MOVIE,
  ID_GENE
} from "../actions/action-types";

export const initialState = {
  moviesId: ["tt1987680","tt4154916","tt7616798","tt6101820","tt4633694","tt1650060","tt2709692","tt1571234","tt1727824","tt5715828","tt6966692","tt4123430","tt0137523","tt0485947","tt0756683"],
  moviesArr: [],
  fetching: false,
  addId: 0
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
      case ADD_MOVIE:
      return{
      ...state,
      moviesArr: [...state.moviesArr, ...action.payload]
      }
      case ID_GENE:
      return{
      ...state,
      addId: state.addId++
      }

    default:
      return state;
  }
};

export default appReducer;