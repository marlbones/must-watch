import { connect } from "react-redux";

import {
  compose,
  withHandlers,
  withState,
} from "recompose";

import { deviceMovies } from '../../data/redux/actions/device';

const handlers = {
  onAddToList: ({device, dispatch, movie}) => () => {
    const currentMovies = device.movies;
    currentMovies.push(movie);
    dispatch(deviceMovies(currentMovies));
  },
};

const SwipeableRowContainer = compose(
  connect(({ device }) => ({ device })),
  withState('swipeRef', 'updateRef', null),
  withHandlers(handlers),
);

export default SwipeableRowContainer;
