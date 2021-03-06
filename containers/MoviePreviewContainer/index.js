import { connect } from "react-redux";

import { deviceSelectedMovie } from '../../data/redux/actions/device';

import {
  compose,
  withHandlers,
  withProps
} from "recompose";

import some from 'lodash/some';

const handlers = {
  onPress: ({ navigation, dispatch, movie }) => () => {
    dispatch(deviceSelectedMovie(movie))
    navigation.navigate("Movie");
  }
};

const MoviePreviewContainer = compose(
  connect(({ device }) => ({ device })),
  withProps(({ movie, device, searchScreenPreview }) => ({
    // Check if movie is already saved in watch list
    inWatchList: some(device.movies, {imdbID: movie.imdbID}),
    inSeenList: some(device.watchedMovies, {imdbID: movie.imdbID})
  })),
  withHandlers(handlers),
);

export default MoviePreviewContainer;
