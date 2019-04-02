import { connect } from "react-redux";

import {
  compose,
  withState,
} from "recompose";

const initialState = ({device}) => ({
  loading: false,
  error: false,
  movies: device.movies,
});

const ListScreenContainer = compose(
  connect(({ device }) => ({ device })),
  withState("state", "updateState", initialState),
);

export default ListScreenContainer;
