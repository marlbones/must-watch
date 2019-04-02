import { connect } from "react-redux";

import { deviceMovies } from '../../data/redux/actions/device';

import {
  compose,
  withHandlers,
} from "recompose";

const handlers = {
  onAddToStore: ({movie, device, dispatch}) => () => {
    const currentMovies = device.movies;
    currentMovies.push(movie);
    dispatch(deviceMovies(currentMovies));
  },
};

const MoviePreviewContainer = compose(
  connect(({ device }) => ({ device })),
  withHandlers(handlers),
);

export default MoviePreviewContainer;
