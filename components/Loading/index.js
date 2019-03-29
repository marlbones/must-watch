import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import Colors from "../../constants/Colors";

const Loading = ({ color, flex, height, overlay, size, style }) => {
  const styles = StyleSheet.create({
    overlay: {
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: 999999
    },
    loading: {
      flex,
      height,
      justifyContent: "center",
      alignItems: "center"
    }
  });

  return (
    <View style={overlay ? styles.overlay : [styles.loading, style]}>
      <ActivityIndicator
        color={color || Colors.blackText}
        size={size || "large"}
      />
    </View>
  );
};

export default Loading;
