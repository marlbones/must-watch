import React from 'react';
import { StyleSheet, Platform, Text, View } from 'react-native';
import { Icon } from 'expo';

import Colors from '../../constants/Colors';

const SeenListItem = ({ movie }) => {
  return (
    <View style={styles.book}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          {movie.Title}
        </Text>
        <Text style={styles.subText}>
          {movie.Year}
        </Text>
        {/* <View style={styles.iconContainer}>
          <Icon.Ionicons
            style={styles.typeIcon}
            name = {movie.Type === 'movie' ? 'md-film' : 'md-tv'}
            size={10}
            color={Colors.greyText}
          />
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  book: {
    flex: 1,
    padding: 16,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    flexDirection: 'row',
    paddingLeft: 12,
    alignItems: 'center',
    // Adding this made Text wrap (https://github.com/facebook/react-native/issues/1438#issuecomment-278745825)
    width: 0,
    flexGrow: 1,
  },
  text: {
    fontSize: 14,
    color: Colors.blackText,
  },
  subText: {
    fontSize: 10,
    color: Colors.greyText,
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

export default SeenListItem;
