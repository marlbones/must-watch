import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import MoviePreview from '../components/MoviePreview';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import EmptyListMessage from '../components/EmptyListMessage';
import ListScreenContainer from '../containers/ListScreenContainer';

const ListScreen = ({ state, device, onRefresh, navigation }) => (
  <View style={styles.container}>
    {(() => {
      if (state.loading) return <Loading flex={1} />;
      if (state.error)
        return (
          <ErrorMessage text={state.error} containerStyle={styles.errorStyle} />
        );
      return (
        <FlatList
          style={styles.listContainer}
          data={state.movies}
          extraData={device.movies}
          onRefresh={() => onRefresh()}
          refreshing={state.loading}
          keyExtractor={item => `${item.imdbID}`}
          renderItem={({ item }) => <MoviePreview movie={item} navigation={navigation} />}
          ListEmptyComponent={
            <EmptyListMessage 
              text={"Currently no items in Watch List"} 
              containerStyle={styles.emptyStyle} 
            />
          }
          scrollEnabled={state.movies.length > 0}
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
    flex: 1,
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
