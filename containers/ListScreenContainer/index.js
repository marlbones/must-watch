import { connect } from "react-redux";

import {
  compose,
} from "recompose";

const ListScreenContainer = compose(
  connect(({ device }) => ({ device })),
);

export default ListScreenContainer;
