import { DEVICE_MOVIES, DEVICE_CLEARED, DEVICE_MOVIE_SELECTED } from '../actions/device';

const deviceDefaultState = {
  movies: [],
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
    case DEVICE_CLEARED:
      return {
        movies: [],
        selectedMovie: null
      };
    default:
      return state;
  }
};

export default deviceReducer;
