import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import SeenListItem from '../components/SeenListItem';
import EmptyListMessage from '../components/EmptyListMessage';
import SeenScreenContainer from '../containers/SeenScreenContainer';

const SeenScreen = ({ device }) => (
  <View style={styles.container}>
    <FlatList
      style={styles.listContainer}
      data={device.watchedMovies}
      extraData={device.watchedMovies}
      keyExtractor={item => `${item.imdbID}`}
      onEndReachedThreshold={30}
      renderItem={({ item }) => <SeenListItem movie={item} />}
      ListEmptyComponent={
        <EmptyListMessage 
          text={"Currently no items in Watch List"} 
          containerStyle={styles.emptyStyle} 
        />
      }
      scrollEnabled={device.watchedMovies.length > 0}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  emptyStyle: {
    paddingTop: 24,
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
});

export default SeenScreenContainer(SeenScreen);
