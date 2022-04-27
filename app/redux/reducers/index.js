import {
  GET_MOVIE_START,
  GET_MOVIE_FAILED,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_BY_ID_START,
  GET_MOVIE_BY_ID_FAILED,
  GET_MOVIE_BY_ID_SUCCESS,
} from '../constants';

const initialState = {
  isLoading: false,
  isLoadingById: false,
  movies: [],
  movieById: {},
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
    case GET_MOVIE_BY_ID_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MOVIE_BY_ID_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case GET_MOVIE_BY_ID_SUCCESS:
      return {
        ...state,
        isLoadingById: false,
        movieById: payload,
      };
    default:
      return state;
  }
};

export default reducer;
