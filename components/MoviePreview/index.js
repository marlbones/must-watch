import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';

import Colors from '../../constants/Colors';
import MoviePreviewContainer from '../../containers/MoviePreviewContainer';

const MoviePreview = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={() => onPress()} delayPressIn={50}>
      {
        (movie.Poster === 'N/A') ? (
          <View style={styles.noImage}>
            <Text style={styles.noImageText}>n/a</Text>
          </View>
        ) : (
          <Image 
            source={{uri: `${movie.Poster}`}} 
            style={styles.image}
          />
        )
      }
      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          {movie.Title}
        </Text>
        <Text style={styles.subText}>
          {movie.Year}
        </Text>
          <Icon.Ionicons
            style={styles.typeIcon}
            name = {movie.Type === 'movie' ? 'md-film' : 'md-tv'}
            size={12}
            color={Colors.blackText}
          />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 24,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  noImage: {
    height: 116,
    width: 84,
    borderRadius: 2,
    borderColor: Colors.border,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noImageText: {
    color: Colors.greyText,
  },
  image: {
    height: 116,
    width: 84,
    borderRadius: 2,
  },
  textWrapper: {
    flexDirection: 'column',
    paddingLeft: 12,
    // Adding this made Text wrap (https://github.com/facebook/react-native/issues/1438#issuecomment-278745825)
    width: 0,
    flexGrow: 1,
  },
  text: {
    fontSize: 16,
    color: Colors.blackText,
  },
  subText: {
    paddingTop: 4,
    fontSize: 12,
    color: Colors.blackText,
  },
  typeIcon: {
    paddingTop: 4,
  },
  addIcon: {
    paddingTop: 12,
    // alignItems: 'flex-end',
  },
});

export default MoviePreviewContainer(MoviePreview);
