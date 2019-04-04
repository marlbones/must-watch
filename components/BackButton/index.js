import React from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "expo";

import Colors from "../../constants/Colors";

const BackButton = ({ navigation }) => (
  <TouchableOpacity
    style={styles.wrapper}
    onPress={() => navigation.goBack()}
  >
    <Icon.Ionicons
      name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
      size={26}
      color={Colors.blackText}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 16
  }
});

export default BackButton;
