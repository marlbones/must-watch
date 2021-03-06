import { connect } from "react-redux";

import {
  compose,
  withState,
  withHandlers,
  lifecycle,
} from "recompose";

import {
  API_KEY,
  API_URL
} from 'react-native-dotenv';


import { deviceMovies, deviceWatchedMovies } from '../../data/redux/actions/device';

import some from 'lodash/some';
import remove from 'lodash/remove';

const initialState = () => ({
  loading: true,
  error: false,
  movie: null,
});

const handlers = {
  onFetch: ({state, updateState, device}) => async () => {
    updateState({ ...state, loading: true });
    
    if (device.selectedMovie === null) {
    updateState({ ...state, loading: false });
    } else {
        // API returns imdbID with whitespace at the end. Remove it so it can be called
        let imdbID = device.selectedMovie.imdbID.replace(/ /g, '');
        await fetch(`${API_URL}/?i=${imdbID}&apikey=${API_KEY}`)
          .then(response => response.json())
          .then(responseJson => {
            updateState({
              ...state,
              loading: false,
              movie: responseJson,
            });
          })
          .catch(error => {
            updateState({ ...state, loading: false, error: `${error}` });
            console.log('error', error)
        });
    }
  },
  onAddToList: ({device, dispatch}) => () => {
    const currentMovies = device.movies;
    currentMovies.push(device.selectedMovie);
    dispatch(deviceMovies(currentMovies));
  },
  onRemoveFromList: ({device, dispatch, navigation}) => () => {
    let currentMovies = device.movies;
    remove(currentMovies, device.selectedMovie);
    dispatch(deviceMovies(currentMovies));
    navigation.goBack(null);
  },
  onAddToSeen: ({device, dispatch}) => () => {
    const currentMovies = device.watchedMovies;
    currentMovies.push({...device.selectedMovie, dateWatched: new Date()});
    dispatch(deviceWatchedMovies(currentMovies));
  },
};

const MovieScreenContainer = compose(
  connect(({ device }) => ({ 
    device,
    // Check if movie is already saved in watched list
    inWatchList: some(device.movies, {imdbID: device.selectedMovie.imdbID}),
    inSeenList: some(device.watchedMovies, {imdbID: device.selectedMovie.imdbID})
  })),
  withState("state", "updateState", initialState),
  withHandlers(handlers),
  lifecycle({
    componentDidMount() {
      this.props.onFetch();
    }
  })
);

export default MovieScreenContainer;
