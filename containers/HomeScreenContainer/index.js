import {
  compose,
  withState,
  withHandlers,
} from "recompose";

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
      await fetch(`http://www.omdbapi.com/?s=${search}&apikey=ec2df1a6`)
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
  }
};

const HomeScreenContainer = compose(
  withState("search", "updateSearch", null),
  withState("state", "updateState", initialState),
  withHandlers(handlers),
);

export default HomeScreenContainer;
