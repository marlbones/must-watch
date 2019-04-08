import {
  compose,
  withState,
  withHandlers,
} from "recompose";

import {
  API_KEY,
  API_URL
} from 'react-native-dotenv';

import { connect } from "react-redux";
import { deviceCleared } from '../../data/redux/actions/device';


const initialState = {
  loading: false,
  error: false,
  movies: [],
};

const handlers = {
  onSubmitSearch: ({search, state, updateState}) => async () => {
    updateState({ ...state, loading: true });

    if (search === null) {
      updateState({...state, loading: false, movies: []});
    } else {
      await fetch(`${API_URL}/?s=${search}&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(responseJson => {
          updateState({
            ...state,
            loading: false,
            movies: responseJson.Search,
          });
        })
        .catch(error => {
          updateState({ ...state, loading: false, error: `${error}` });
        });
    }
  },
  onClearStore: ({dispatch}) => () => {
    dispatch(deviceCleared());
  },
  onClearSearch: ({state, updateState, updateSearch}) => () => {
    updateSearch(null)
    updateState({...state, movies: []})
  },
};

const HomeScreenContainer = compose(
  connect(({ device }) => ({ device })),
  withState("search", "updateSearch", null),
  withState("state", "updateState", initialState),
  withHandlers(handlers),
);

export default HomeScreenContainer;
