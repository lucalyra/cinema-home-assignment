import { 
  GET_MOVIES_BY_NAME_RESPONSE,
  GET_MOVIES_BY_NAME_REQUEST
} from "../actions/action-types";

export const initialState = {
  moviesId: ["tt1987680","tt1987682"],
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
    default:
      return state;
  }
};

export default appReducer;