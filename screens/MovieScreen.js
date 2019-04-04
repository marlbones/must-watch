import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import MoviePreview from '../components/MoviePreview';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import MovieScreenContainer from '../containers/MovieScreenContainer';

import Colors from '../constants/Colors';

const MovieScreen = ({ state }) => (
  <View style={styles.container}>
    <View style={styles.contentContainer}>
      <Text style={styles.headerText}>
        Bart Bimpson
      </Text>
    </View>
    {(() => {
      if (state.loading) return <Loading flex={1} />;
      if (state.error)
        return (
          <ErrorMessage text={state.error} containerStyle={styles.errorStyle} />
        );
      return (
        <Text>{state.movie.Title}</Text>
      ); 
    })()}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    marginHorizontal: 4,
    marginTop: 16,
    paddingBottom: 16,
  },
  headerText: {
    fontSize: 18,
    color: Colors.blackText,
    lineHeight: 24,
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default MovieScreenContainer(MovieScreen);
