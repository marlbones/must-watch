import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import WatchedListItem from '../components/WatchedListItem';
import EmptyListMessage from '../components/EmptyListMessage';
import WatchedScreenContainer from '../containers/WatchedScreenContainer';

const WatchedScreen = ({ device, navigation }) => (
  <View style={styles.container}>
    <FlatList
      style={styles.listContainer}
      data={device.watchedMovies}
      extraData={device.watchedMovies}
      keyExtractor={item => `${item.imdbID}`}
      onEndReachedThreshold={30}
      renderItem={({ item }) => <WatchedListItem movie={item} navigation={navigation} />}
      ListEmptyComponent={
        <EmptyListMessage 
          text={"Currently no movies have been watched"} 
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

export default WatchedScreenContainer(WatchedScreen);
