import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Icon } from "expo";

import Colors from "../../constants/Colors";

const ErrorMessage = ({ containerStyle, textStyle, text }) => {
  let newText = text;
  if (newText.includes("TypeError: ")) newText = text.slice(11);

  return (
    <View style={[styles.wrapper, containerStyle]}>
      <Icon.Ionicons
        name={Platform.OS === "ios" ? "ios-warning" : "md-warning"}
        size={64}
        color={Colors.errorText}
      />
      <Text style={[styles.text, textStyle]}>{newText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 24,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    color: Colors.errorText
  }
});

export default ErrorMessage;
