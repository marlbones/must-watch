
import {
  compose,
  withState,
  lifecycle
} from "recompose";

import { Animated } from 'react-native';

const LoadingImageContainer = compose(
    withState('loadColor', 'updateLoadColor', new Animated.Value(0)),
    lifecycle({
        componentDidMount() {
            Animated.loop(
                Animated.timing(this.props.loadColor, {
                    toValue: 1,
                    duration: 1000
                })
            ).start()
        }
    })
);

export default LoadingImageContainer;
