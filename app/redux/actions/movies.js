import {
  GET_MOVIE_START,
  GET_MOVIE_FAILED,
  GET_MOVIE_SUCCESS,
} from '../constants';
import Axios from 'axios';

const getMovieStart = () => ({
  type: GET_MOVIE_START,
});
const getMovieFailed = () => ({
  type: GET_MOVIE_FAILED,
});
const getMovieSuccess = payload => ({
  type: GET_MOVIE_SUCCESS,
  payload: payload,
});

export const getMovie = page => async dispatch => {
  const path = `https://api.themoviedb.org/3/tv/popular?api_key=9411c374b59217005e6957e25f566990&language=en-US&page=${page}
  `;
  dispatch(getMovieStart());
  try {
    const res = await Axios.get(path);
    dispatch(getMovieSuccess(res.data.results));
    return res.data.results;
  } catch (err) {
    dispatch(getMovieFailed());
    throw err.response;
  }
};
