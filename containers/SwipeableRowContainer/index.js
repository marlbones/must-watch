import { connect } from "react-redux";

import {
  compose,
  withHandlers,
  withState,
} from "recompose";

import { deviceMovies } from '../../data/redux/actions/device';

import remove from 'lodash/remove';

const handlers = {
  onAddToList: ({device, dispatch, movie}) => () => {
    const currentMovies = device.movies;
    currentMovies.push(movie);
    dispatch(deviceMovies(currentMovies));
  },
  onRemoveFromList: ({device, dispatch, movie}) => () => {
    let currentMovies = device.movies;
    remove(currentMovies, movie);
    dispatch(deviceMovies(currentMovies));
  },
};

const SwipeableRowContainer = compose(
  connect(({ device }) => ({ device })),
  withState('swipeRef', 'updateRef', null),
  withHandlers(handlers),
);

export default SwipeableRowContainer;
