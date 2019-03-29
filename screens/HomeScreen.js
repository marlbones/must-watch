import React from 'react';
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native';

import { SearchBar } from 'react-native-elements';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import MoviePreview from '../components/MoviePreview';
import HomeScreenContainer from '../containers/HomeScreenContainer';

import Colors from '../constants/Colors';

const HomeScreen = ({ search, updateSearch, state, onSubmitSearch }) => (
  <View style={styles.container}>
    <View style={styles.contentContainer}>
      <Text style={styles.headerText}>
        Search for a movie
      </Text>
      <View style={styles.searchBarContainer}>
        <SearchBar
          inputStyle={styles.searchBarInput}
          // placeholder="type here"
          inputContainerStyle={{backgroundColor: Colors.border}}
          platform={Platform.OS === 'ios' ? 'ios' : 'android'}
          onChangeText={text => {
            updateSearch(text);
          }}
          onSubmitEditing={() => onSubmitSearch()}
          value={search}
          onClear={() => updateSearch(null)}
        />
      </View>
    </View>
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
          // onRefresh={() => onFetch()}
          refreshing={state.loading}
          keyExtractor={item => `${item.imdbID}`}
          renderItem={({ item }) => <MoviePreview movie={item} />}
          // ListEmptyComponent={<Text>hi</Text>}
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
  contentContainer: {
    width: '100%',
    marginHorizontal: 4,
    marginTop: 16,
    paddingBottom: 16,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 18,
    color: Colors.blackText,
    lineHeight: 24,
    textAlign: 'center',
    paddingVertical: 10,
  },
  searchBarContainer: {
    marginHorizontal: 24,
  },
  searchBarInput: {
    fontSize: 12,
    color: Colors.blackText,
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
});

export default HomeScreenContainer(HomeScreen);
