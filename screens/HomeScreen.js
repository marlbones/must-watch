import React from 'react';
import { StyleSheet, Text, View, Platform, FlatList, Animated } from 'react-native';

import { SearchBar } from 'react-native-elements';

import EmptyListMessage from '../components/EmptyListMessage';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import MoviePreview from '../components/MoviePreview';
import HomeScreenContainer from '../containers/HomeScreenContainer';

import Colors from '../constants/Colors';

const HomeScreen = ({
  search,
  updateSearch,
  state,
  onSubmitSearch,
  onClearSearch,
  navigation,
}) => (
  <View style={styles.container}>
    <Animated.View 
      style={[
        styles.contentContainer, 
        {
          height: state.searchHeight.interpolate({
            inputRange: [0, 1],
            outputRange: ['75%', '15%']
          })
        }
      ]}
    >
      <Animated.Text 
        style={[
          styles.searchText, 
          {
            opacity: state.searchOpacity
          }
        ]}
      >
        Search for a movie
      </Animated.Text>
      <SearchBar
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        inputStyle={styles.searchBarInput}
        platform={Platform.OS === 'ios' ? 'ios' : 'android'}
        onChangeText={text => {
          updateSearch(text);
        }}
        onSubmitEditing={() => onSubmitSearch()}
        value={search}
        onClear={() => onClearSearch()}
      />
    </Animated.View>
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
          refreshing={state.loading}
          keyExtractor={item => `${item.imdbID}`}
          renderItem={({ item }) => <MoviePreview movie={item} navigation={navigation} searchScreenPreview />}
          ListEmptyComponent={
            state.searchMade && (
              <EmptyListMessage 
                text={"No movies with that name"} 
                containerStyle={styles.emptyStyle} 
              />
            )
          }
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
  contentContainer: {
    justifyContent: 'center',
    width: '100%',
    marginHorizontal: 4,
    paddingBottom: 16,
  },
  searchText: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.blackText,
    paddingBottom: 8,
  },
  searchBarContainer: {
    marginHorizontal: 24,
  },
  searchBarInputContainer: {
    backgroundColor: Colors.border
  },
  searchBarInput: {
    fontSize: 14,
    color: Colors.blackText,
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  emptyStyle: {
    paddingTop: 24,
  },
});

export default HomeScreenContainer(HomeScreen);
