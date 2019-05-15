import {
  DEVICE_MOVIES,
  DEVICE_CLEARED,
  DEVICE_MOVIE_SELECTED,
  DEVICE_WATCHED_MOVIES
} from '../actions/device';

const deviceDefaultState = {
  movies: [],
  watchedMovies: [],
  selectedMovie: null
};

const deviceReducer = (state = deviceDefaultState, action) => {
  switch (action.type) {
    case DEVICE_MOVIES:
      return {
        ...state,
        movies: action.movies
      };
    case DEVICE_MOVIE_SELECTED:
      return {
        ...state,
        selectedMovie: action.selectedMovie
      };
    case DEVICE_WATCHED_MOVIES:
      return {
        ...state,
        watchedMovies: action.watchedMovies
      };
    case DEVICE_CLEARED:
      return {
        movies: [],
        watchedMovies: [],
        selectedMovie: null
      };
    default:
      return state;
  }
};

export default deviceReducer;
