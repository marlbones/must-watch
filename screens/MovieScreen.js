import React from 'react';
import { StyleSheet, View } from 'react-native';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import MovieFull from '../components/MovieFull';
import MovieScreenContainer from '../containers/MovieScreenContainer';

const MovieScreen = ({
    state,
    searchOrWatched,
    onAddToList,
    inWatchList,
    inSeenList,
    onRemoveFromList,
    onAddToSeen,
}) => (
  <View style={styles.container}>
    {(() => {
      if (state.loading) return <Loading flex={1} />;
      if (state.error)
        return (
          <ErrorMessage text={state.error} containerStyle={styles.errorStyle} />
        );
      return (
        <MovieFull
          movie={state.movie}
          searchOrWatched={searchOrWatched}
          onAddToList={() => onAddToList()}
          onRemoveFromList={() => onRemoveFromList()}
          onAddToSeen={() => onAddToSeen()}
          inWatchList={inWatchList}
          inSeenList={inSeenList}
        />
      ); 
    })()}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  errorStyle: {
    flex: 1
  },
});

export default MovieScreenContainer(MovieScreen);
