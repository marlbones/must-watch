import { connect } from "react-redux";

import { deviceSelectedMovie } from '../../data/redux/actions/device';

import {
  compose,
  withHandlers,
} from "recompose";

const handlers = {
  onPress: ({ navigation, dispatch, movie }) => () => {
    dispatch(deviceSelectedMovie(movie))
    navigation.navigate("Movie");
  }
};

const WatchedListItemContainer = compose(
  connect(({ device }) => ({ device })),
  withHandlers(handlers),
);

export default WatchedListItemContainer;
