
import { Animated } from 'react-native';

import {
  compose,
  lifecycle,
  withProps,
} from "recompose";

const MovieFullContainer = compose(
  withProps(() => ({
    componentAnimations: new Animated.Value(0),
  })),
  lifecycle({
    componentDidMount() {
      Animated.timing(this.props.componentAnimations, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start()
    },
  })
);

export default MovieFullContainer;
