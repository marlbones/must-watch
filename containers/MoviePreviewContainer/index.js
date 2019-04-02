// import { AsyncStorage } from 'react-native';
import { db } from '../../data/datastore';

import {
  compose,
  withHandlers,
} from "recompose";

const handlers = {
  // onAddToStore: ({movie}) => async () => {
  //   try {
  //     await AsyncStorage.setItem(`${movie.imdbID}`, JSON.stringify(movie));
  //   } catch (error) {
  //     console.log("error", error)
  //   }
  // },
  onAddToStore: ({movie}) => async () => {
    try {
      await db.insert(movie, (insertError, newDoc) => {
        console.log('newDoc', newDoc)
        console.log('insertError', insertError)
      });
    } catch (error) {
      console.log("try catch error", error)
    }
  },

  // onGetStore: ({movie}) => async () => {
  //   try {
  //     await AsyncStorage.getAllKeys((err, result) => {
  //       if (err) {
  //         console.log(err)
  //       } else {
  //         AsyncStorage.multiGet(result, (multiErr, multiResult) => {
  //           if (multiErr) {
  //             console.log(multiErr);
  //           } else {
  //             const allStoreItems = multiResult.map(result => JSON.parse(result[1]));
  //             console.log(allStoreItems)
  //           }
  //         })
  //       }
  //     });
  //   } catch (error) {
  //     console.log("error", error)
  //   }
  // }
  onGetStore: () => async () => {
    try {
      db.find({}, (dbFindError, docs) => {
        console.log('dbFindError', dbFindError)
        console.log('docs', docs)
      })
    } catch (error) {
      console.log("error", error)
    }
  }
};

const MoviePreviewContainer = compose(
  withHandlers(handlers),
);

export default MoviePreviewContainer;
