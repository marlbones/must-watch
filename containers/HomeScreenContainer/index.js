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

import uniqBy from 'lodash/uniqBy';

const initialState = {
  loading: false,
  error: false,
  movies: [],
  searchHeight: new Animated.Value(0),
  searchMade: false,
  searchOpacity: new Animated.Value(1),
};

const handlers = {
  onSubmitSearch: ({search, state, updateState}) => () => {

    Animated.parallel([
      Animated.timing(state.searchHeight, {
        toValue: 1,
        duration: 500
      }),
      Animated.timing(state.searchOpacity, {
        toValue: 0,
        duration: 500
      })
    ]).start(async () => {
      updateState({ ...state, loading: true });

      if (search === null) {
        updateState({...state, loading: false, movies: []});
      } else {
        await fetch(`${API_URL}/?s=${search}&apikey=${API_KEY}`)
          .then(response => response.json())
          .then(responseJson => {
            // Api returns duplicates. uniqBy function removes duplicates and returns a filteredArray
            const filteredResults = uniqBy(responseJson.Search, item => item.imdbID);
            updateState({
              ...state,
              loading: false,
              movies: filteredResults,
              searchMade: true,
            });
          })
          .catch(error => {
            updateState({ ...state, loading: false, error: `${error}` });
          });
      }
    })
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
  withState("search", "updateSearch", null),
  withState("state", "updateState", initialState),
  withHandlers(handlers),
);

export default HomeScreenContainer;
