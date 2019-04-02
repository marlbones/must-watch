import { DEVICE_MOVIES, DEVICE_CLEARED } from '../actions/device';

const deviceDefaultState = {
  movies: []
};

const deviceReducer = (state = deviceDefaultState, action) => {
  switch (action.type) {
    case DEVICE_MOVIES:
      return {
        movies: action.movies
      };
    case DEVICE_CLEARED:
      return {
        movies: []
      };
    default:
      return state;
  }
};

export default deviceReducer;
