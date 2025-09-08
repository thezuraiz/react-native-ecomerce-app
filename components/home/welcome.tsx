import { useNavigation } from "@react-navigation/native";
import { Camera, SearchNormal1 } from "iconsax-react-native";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const Welcome = () => {
  let navigation = useNavigation();
  return (
    <View className="pt-4">
      <View className="my-2 ">
        <Text className="text-3xl font-bold">Find The Most</Text>
        <Text className="text-xl font-medium text-green-800">
          Luxuries Furniture
        </Text>
      </View>
      <View className="flex-row items-center justify-between my-4 rounded-lg bg-blue-50">
        <TouchableOpacity className="px-4">
          <SearchNormal1 size="24" color="black" />
        </TouchableOpacity>
        <TextInput
          className="flex-1 h-full "
          value=""
          editable={false}
          onPressIn={() => navigation.navigate("Search" as never)}
          placeholder="What are you looking for"
        />
        <TouchableOpacity className="p-2 m-0 rounded-lg bg-emerald-900">
          <Camera size="25" color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
