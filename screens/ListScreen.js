import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Card } from 'react-native-elements';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import ListScreenContainer from '../containers/ListScreenContainer';

import Colors from '../constants/Colors';

const ListScreen = ({ state }) => (
  <View style={styles.container}>
    <View style={styles.contentContainer}>
      <Text style={styles.headerText}>
        Remember to watch
      </Text>
    </View>
    {(() => {
      if (state.loading) return <Loading flex={1} />;
      if (state.error)
        return (
          <ErrorMessage text={state.error} containerStyle={styles.errorStyle} />
        );
      return (
        state.movies.map((item, i) => (
        <Card key={i}>
          <Text>{item.Title}</Text>
        </Card>
        ))); 
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
  listContainer: {
    flex: 1,
    width: '100%',
  },
});

export default ListScreenContainer(ListScreen);
