import {
  GET_MOVIE_START,
  GET_MOVIE_FAILED,
  GET_MOVIE_SUCCESS,
} from '../constants';

const initialState = {
  isLoading: false,
  movies: [],
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_MOVIE_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MOVIE_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: payload,
      };
    default:
      return state;
  }
};

export default reducer;
