import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/Colors';
import LoadingImage from '../components/LoadingImage';

const AboutScreen = () => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <LoadingImage source={require('../assets/images/mustwatchlogo.png')} style={styles.logo}/>
    </View>
    <View style={styles.textView}>
      <Text style={styles.text}>
        Must-watch is made by marlbones. Search a movie, add it to your list. Now you have a visual movie list!
      </Text>
      <Text style={styles.text}>
        This app is a work in progress. Video game, book lists and other amazing features to come.
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  actionText: {
    color: 'black',
    fontSize: 16,
    backgroundColor: 'red',
    paddingLeft: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  imageContainer: {
    paddingTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
  },
  textView: {
    paddingTop: 16,
  },
  text: {
    color: Colors.blackText,
    paddingTop: 8,
  },
});

export default AboutScreen;
