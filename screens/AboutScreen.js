import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/Colors';

const AboutScreen = () => (
  <View style={styles.container}>
    <View style={styles.textView}>
      <Text style={styles.text}>
        Must-watch is made by marlbones. Search a movie, add it to your list. Now you have a visual movie list!
      </Text>
      <Text style={styles.text}>
        This app is a work in progress. Video game and book lists to come.
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
  textView: {
    paddingTop: 40,
  },
  text: {
    color: Colors.blackText,
    paddingTop: 8,
  },
});

export default AboutScreen;
