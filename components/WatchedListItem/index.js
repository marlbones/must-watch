import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Moment from 'moment';

import Colors from '../../constants/Colors';

const WatchedListItem = ({ movie }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.textWrapper}>
        <View style={styles.textBlock}>
          <Text style={styles.text}>
            {movie.Title}
          </Text>
        <Text style={styles.subText}>
          {movie.Year}
        </Text>
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.dateText}>
            Watched on
          </Text>
          <Text style={styles.date}>
            {Moment(movie.dateWatched).format('DD/MM/YYYY')}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 16,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    flexDirection: 'column',
    paddingLeft: 12,
    justifyContent: 'center',
    // Adding this made Text wrap (https://github.com/facebook/react-native/issues/1438#issuecomment-278745825)
    width: 0,
    flexGrow: 1,
  },
  textBlock: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    color: Colors.blackText,
  },
  subText: {
    fontSize: 12,
    color: Colors.greyText,
    paddingLeft: 4,
  },
  dateText: {
    fontSize: 10,
    color: Colors.greyText,
    paddingTop: 4,
  },
  date: {
    fontSize: 10,
    color: Colors.greyText,
    paddingTop: 4,
    paddingLeft: 4,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  typeIcon: {
    paddingLeft: 4,
    paddingRight: 4,
  },
});

export default WatchedListItem;
