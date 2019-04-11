import React from 'react';
import { StyleSheet, View } from 'react-native';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import MovieFull from '../components/MovieFull';
import MovieScreenContainer from '../containers/MovieScreenContainer';

const MovieScreen = ({
    state,
    displayAddButton,
    onAddToList,
    inWatchList,
    onRemoveFromList,
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
          displayAddButton={displayAddButton}
          onAddToList={() => onAddToList()}
          onRemoveFromList={() => onRemoveFromList()}
          inWatchList={inWatchList}
        />
      ); 
    })()}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  errorStyle: {
    flex: 1
  },
});

export default MovieScreenContainer(MovieScreen);
