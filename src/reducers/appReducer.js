import { 
  GET_MOVIES_BY_NAME_RESPONSE,
  GET_MOVIES_BY_NAME_REQUEST
} from "../actions/action-types";

export const initialState = {
  movies: []
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_BY_NAME_REQUEST: // Fetch movies
      
      return state;

      // return { ...state, movies: [action.payload] };

    default:
      return state;
  }
};

export default appReducer;