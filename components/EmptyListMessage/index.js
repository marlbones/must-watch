import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/Colors";

const EmptyListMessage = ({ containerStyle, textStyle, text }) => {
  return (
    <View style={[styles.wrapper, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    color: Colors.greyText
  }
});

export default EmptyListMessage;
