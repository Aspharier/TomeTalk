import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

const AnimationScreen = () => {
  return (
    <View>
      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        source={require("../assets/lottie/netflixExample.json")}
      />
    </View>
  );
};

export default AnimationScreen;
