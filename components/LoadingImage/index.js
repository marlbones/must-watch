import React from "react";
import { Image, Animated } from "react-native";

import Colors from "../../constants/Colors";

import LoadingImageContainer from "../../containers/LoadingImageContainer";

const LoadingImage = ({loadColor, ...props}) => (
    <Animated.View 
        style={
            {backgroundColor: loadColor.interpolate({
                inputRange: [0, 1],
                outputRange: [Colors.border, 'white']
            })}
        }
    >
        <Image {...props}/>
    </Animated.View>
);

export default LoadingImageContainer(LoadingImage);