import { AsyncStorage } from 'react-native';

import {
  compose,
  withHandlers,
} from "recompose";

const handlers = {
  onAddToStore: ({movie}) => async () => {
    try {
      await AsyncStorage.clear(clearError => {
        console.log('clear error', clearError)
      });
    } catch (error) {
      console.log("error", error)
    }
  },

  onGetStore: ({movie}) => async () => {
    try {
      await AsyncStorage.getAllKeys((err, result) => {
        if (err) {
          console.log(err)
        } else {
          AsyncStorage.multiGet(result, (multiErr, multiResult) => {
            if (multiErr) {
              console.log(multiErr);
            } else {
              const allStoreItems = multiResult.map(result => JSON.parse(result[1]));
              console.log(allStoreItems)
            }
          })
        }
      });
    } catch (error) {
      console.log("error", error)
    }
  }
};

const MoviePreviewContainer = compose(
  withHandlers(handlers),
);

export default MoviePreviewContainer;
