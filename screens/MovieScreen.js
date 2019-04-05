import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import MovieScreenContainer from '../containers/MovieScreenContainer';

import Colors from '../constants/Colors';

const MovieScreen = ({ state }) => (
  <View style={styles.container}>
    {(() => {
      if (state.loading) return <Loading flex={1} />;
      if (state.error)
        return (
          <ErrorMessage text={state.error} containerStyle={styles.errorStyle} />
        );
      return (
        <View style={styles.contentContainer}>
          <Image
            style={styles.image}
            source={{uri: `${state.movie.Poster}`}}   
          />
          <View style={styles.textWrapper}>
            <Text style={styles.headerText}>
              {state.movie.Title}
            </Text>
            <Text style={styles.yearText}>
              {state.movie.Year}
            </Text>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Rating: {state.movie.Rated}</Text>
              <Text style={styles.infoText}>Runtime: {state.movie.Runtime}</Text>
              <Text style={styles.infoText}>Released: {state.movie.Released}</Text>
              <Text style={styles.infoText}>Genre: {state.movie.Genre}</Text>
            </View>
          </View>
        </View>
      ); 
    })()}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 12,
  },
  contentContainer: {
    width: '100%',
    marginHorizontal: 4,
    marginTop: 16,
    paddingBottom: 16,
    flexDirection: 'row',
  },
  image: {
    height: 260,
    width: 164,
    borderRadius: 4,
  },
  textWrapper: {
    flexDirection: 'column',
    paddingLeft: 6,
    // Adding this made Text wrap (https://github.com/facebook/react-native/issues/1438#issuecomment-278745825)
    width: 0,
    flexGrow: 1,
  },
  headerText: {
    fontSize: 18,
    color: Colors.blackText,
    lineHeight: 24,
    textAlign: 'center',
    paddingVertical: 10,
  },
  yearText: {
    fontSize: 14,
    color: Colors.blackText,
    lineHeight: 18,
    textAlign: 'center',
  },
  infoContainer: {
    paddingTop: 8,
  },
  infoText: {
    fontSize: 12,
    color: Colors.blackText,
    textAlign: 'center',
  },
});

export default MovieScreenContainer(MovieScreen);
