import { connect } from "react-redux";

import { deviceMovies, deviceSelectedMovie } from '../../data/redux/actions/device';

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

  onPress: ({ navigation, dispatch, movie }) => () => {
    dispatch(deviceSelectedMovie(movie))
    navigation.navigate("Movie");
  }
};

const MoviePreviewContainer = compose(
  connect(({ device }) => ({ device })),
  withHandlers(handlers),
);

export default MoviePreviewContainer;
