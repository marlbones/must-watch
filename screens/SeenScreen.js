import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/Colors';

const SeenScreen = () => (
  <View style={styles.container}>
    <View style={styles.textView}>
      <Text style={styles.text}>
        SeenScreen
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

export default SeenScreen;
