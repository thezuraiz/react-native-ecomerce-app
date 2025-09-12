import React from "react";
import { Text, View } from "react-native";

const CustomDivider = ({ title }) => {
  return (
    <View className="flex-row items-center justify-center gap-3 my-10">
      <View className="flex-1 px-5 border-t border-gray-300"></View>
      <Text className="text-base font-medium text-gray-600">{title}</Text>
      <View className="flex-1 px-5 border-t border-gray-300"></View>
    </View>
  );
};

export default CustomDivider;
