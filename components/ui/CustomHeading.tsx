import { Grid5 } from "iconsax-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CustomHeading = ({
  Heading = "New Arrivals",
  Icon = <Grid5 size="24" color="black" />,
  onPress = () => {},
}) => {
  return (
    <View className="flex-row items-center justify-between my-2 mt-8">
      <Text className="text-3xl font-bold">{Heading}</Text>
      <TouchableOpacity onPress={onPress}>{Icon}</TouchableOpacity>
    </View>
  );
};

export default CustomHeading;
