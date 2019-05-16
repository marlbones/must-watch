import { connect } from "react-redux";

import {
  compose,
} from "recompose";

const SeenScreenContainer = compose(
  connect(({ device }) => ({ device })),
);

export default SeenScreenContainer;
