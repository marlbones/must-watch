// import { AsyncStorage } from 'react-native';
import { db } from '../../data/datastore';

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
      db.find({}, (dbFindError, docs) => {
        if (dbFindError) {
          updateState({...state, loading: false, error: dbFindError});
        } else {
          updateState({...state, loading: false, movies: docs});
        }
      });
    } catch (error) {
      updateState({...state, loading: false, error});
    }
  }
};

const ListScreenContainer = compose(
  withState("state", "updateState", initialState),
  withHandlers(handlers),
  lifecycle({
    componentDidMount() {
      this.props.onFetchStoredMovies();
      console.log('componentMount')
    },
    componentDidUpdate(prevProps) {
      if (this.props.state.movies !== prevProps.state.movies) {
        console.log('different');
      }
    },
  })
);

export default ListScreenContainer;
