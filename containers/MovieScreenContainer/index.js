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

import { deviceMovies } from '../../data/redux/actions/device';
import some from 'lodash/some';
import remove from 'lodash/remove';

const initialState = ({device}) => ({
  loading: true,
  error: false,
  movie: null,
  moviePreview: device.selectedMovie
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
  onRemoveFromList: ({device, state, dispatch, navigation}) => () => {
    let currentMovies = device.movies;
    remove(currentMovies, state.moviePreview);
    dispatch(deviceMovies(currentMovies));
    navigation.goBack(null);
  },
};

const ListScreenContainer = compose(
  connect(({ device }) => ({ 
    device,
    // Check if device already has movie user is viewing saved in the watch list
    inWatchList: some(device.movies, {imdbID: device.selectedMovie.imdbID})
  })),
  withState("state", "updateState", initialState),
  withHandlers(handlers),
  lifecycle({
    componentDidMount() {
      this.props.onFetch();
    }
  })
);

export default ListScreenContainer;
