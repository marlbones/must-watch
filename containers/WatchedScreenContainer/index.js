import { connect } from "react-redux";

import {
  compose,
} from "recompose";

const WatchedScreenContainer = compose(
  connect(({ device }) => ({ device })),
);

export default WatchedScreenContainer;
