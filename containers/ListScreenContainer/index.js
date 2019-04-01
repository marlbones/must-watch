import { AsyncStorage } from 'react-native';


import {
  compose,
  lifecycle,
  withState,
  withHandlers,
} from "recompose";

const initialState = {
  loading: false,
  error: false,
  movies: [],
};

const handlers = {
  onFetchStoredMovies: ({state, updateState}) => async () => {
    updateState({...state, loading: true});

    try {
      await AsyncStorage.getAllKeys((err, result) => {
        if (err) {
          updateState({...state, loading: false, error: `${err}`});
        } else {
          AsyncStorage.multiGet(result, (multiErr, multiResult) => {
            if (multiErr) {
              updateState({...state, loading: false, error: `${multiErr}`});
            } else {
              const allStoreItems = multiResult.map(result => JSON.parse(result[1]));
              updateState({...state, loading: false, movies: allStoreItems});
            }
          })
        }
      });
    } catch (error) {
        updateState({...state, loading: false, error: `${error}`});
    }
  }
};

const ListScreenContainer = compose(
  withState("state", "updateState", initialState),
  withHandlers(handlers),
  lifecycle({
    componentDidMount() {
      this.props.onFetchStoredMovies();
    },
    componentDidUpdate(prevProps) {
      if (this.props.state.movies !== prevProps.state.movies) {
        console.log('different');
      }
    },
  })
);

export default ListScreenContainer;
