import {
  compose,
  withState,
  withHandlers,
} from "recompose";
import { Animated } from 'react-native';

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
  searchHeight: new Animated.Value(0),
  searchMade: false,
  searchOpacity: new Animated.Value(1),
};

const handlers = {
  onSubmitSearch: ({search, state, updateState}) => async () => {

    Animated.parallel([
      Animated.timing(state.searchHeight, {
        toValue: 1,
        duration: 500
      }),
      Animated.timing(state.searchOpacity, {
        toValue: 0,
        duration: 500
      })
    ]).start()

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
            searchMade: true,
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
    Animated.parallel([
      Animated.timing(state.searchHeight, {
        toValue: 0,
        duration: 500
      }),
      Animated.timing(state.searchOpacity, {
        toValue: 1,
        duration: 500
      })
    ]).start(() => {
        updateSearch(null)
        updateState({
          ...state,
          movies: [],
          searchMade: false,
        })
    });
  },
};

const HomeScreenContainer = compose(
  connect(({ device }) => ({ device })),
  withState("search", "updateSearch", null),
  withState("state", "updateState", initialState),
  withHandlers(handlers),
);

export default HomeScreenContainer;
