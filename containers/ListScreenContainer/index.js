import { connect } from "react-redux";

import {
  compose,
  withState,
  withHandlers,
} from "recompose";

const initialState = ({device}) => ({
  loading: false,
  error: false,
  movies: device.movies,
});

const handlers = {
  onRefresh: ({device, state, updateState}) => () => {
    updateState({...state, movies: device.movies});
  },
};

const ListScreenContainer = compose(
  connect(({ device }) => ({ device })),
  withState("state", "updateState", initialState),
  withHandlers(handlers),
);

export default ListScreenContainer;
