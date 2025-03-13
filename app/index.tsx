import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/animation">AnimationScreen</Link>
    </View>
  );
}
