import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';


import Colors from '../../constants/Colors';
import MoviePreviewContainer from '../../containers/MoviePreviewContainer';

const MoviePreview = ({ movie, onAddToStore, displayAddButon, onPress }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={() => onPress()}>
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
            style={styles.typeIcon}
            name = {movie.Type === 'movie' ? 'md-film' : 'md-tv'}
            size={12}
            color={Colors.blackText}
          />
        {displayAddButon && (
          <TouchableOpacity style={styles.addIcon} onPress={() => onAddToStore()} >
            <Icon.Ionicons
              name = 'md-add-circle'
              size={16}
              color={Colors.blackText}
            />
          </TouchableOpacity>
        )}
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
