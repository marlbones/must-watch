import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import MoviePreview from '../components/MoviePreview';
import EmptyListMessage from '../components/EmptyListMessage';
import ListScreenContainer from '../containers/ListScreenContainer';

const ListScreen = ({ device, navigation }) => (
  <View style={styles.container}>
    <FlatList
      style={styles.listContainer}
      data={device.movies}
      extraData={device.movies}
      keyExtractor={item => `${item.imdbID}`}
      onEndReachedThreshold={30}
      renderItem={({ item }) => <MoviePreview movie={item} navigation={navigation} />}
      ListEmptyComponent={
        <EmptyListMessage 
          text={"Currently no items in Watch List"} 
          containerStyle={styles.emptyStyle} 
        />
      }
      scrollEnabled={device.movies.length > 0}
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

export default ListScreenContainer(ListScreen);
