import React from "react";
import { StyleSheet, Animated, TouchableOpacity } from "react-native";
import { Icon } from 'expo';

import Colors from "../../constants/Colors";

import Swipeable from 'react-native-gesture-handler/Swipeable';

import SwipeableRowContainer from '../../containers/SwipeableRowContainer';

const SwipeableRow = ({ children, canSwipe, onAddToList, updateRef, swipeRef }) => {

  const onRenderLeftActions = (progress) => {
    const shift = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });
    return (
      <Animated.View 
        style={[
          styles.container, 
          {transform: 
            [{
              translateX: shift
            }]
          }
        ]}
      >
        <TouchableOpacity 
          onPress={() => {
            onAddToList();
            swipeRef.close();
          }}
        >
          <Icon.FontAwesome 
            name={'plus-circle'} 
            size={24} 
            style={styles.icon}
          />
        </TouchableOpacity>
      </Animated.View>
    )
  };
  return (
    <Swipeable
      ref={updateRef} 
      renderLeftActions={canSwipe ? onRenderLeftActions : null}
      friction={2}
      leftThreshold={40}
    >
      {children}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    backgroundColor: Colors.tintColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  actionText: {
    color: Colors.blackText,
    fontSize: 16,
    padding: 10
  },
  icon: {
    color: 'white'
  },
});

export default SwipeableRowContainer(SwipeableRow);