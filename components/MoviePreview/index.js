import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';


import Colors from '../../constants/Colors';
import MoviePreviewContainer from '../../containers/MoviePreviewContainer';

const MoviePreview = ({ movie, onAddToStore, onGetStore }) => {
  return (
    <View style={styles.wrapper}>
      <Image 
        source={{uri: `${movie.Poster}`}} 
        style={styles.image}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          {movie.Title}
        </Text>
        <Text style={styles.subText}>
          {movie.Year}
        </Text>
          <Icon.Ionicons
            name = {movie.Type === 'movie' ? 'md-film' : 'md-tv'}
            size={12}
            color={Colors.blackText}
            onPress={() => onGetStore()}
          />
        <TouchableOpacity style={{paddingTop: 12}} onPress={() => onAddToStore()} >
          <Icon.Ionicons
            name = 'md-add-circle'
            size={12}
            color={Colors.blackText}
          />
        </TouchableOpacity>
      </View>
    </View>
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
  image: {
    // Good size for modal
    // height: 260,
    // width: 164,

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
    flexShrink: 1,
  },
  subText: {
    fontSize: 12,
    color: Colors.blackText,
  },
});

export default MoviePreviewContainer(MoviePreview);
