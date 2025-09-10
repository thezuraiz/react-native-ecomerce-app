import { useNavigation } from "@react-navigation/native";
import { Camera, SearchNormal1 } from "iconsax-react-native";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  let navigation = useNavigation();
  return (
    <SafeAreaView className="px-3">
      <View className="flex-row items-center justify-between my-4 bg-blue-100 rounded-lg">
        <TouchableOpacity className="px-4">
          <Camera size="24" color="black" />
        </TouchableOpacity>
        <TextInput
          className="flex-1 h-full "
          onPressIn={() => navigation.navigate("Search" as never)}
          placeholder="What are you looking for"
        />
        <TouchableOpacity className="p-2 m-0 rounded-lg bg-emerald-950">
          <SearchNormal1 size="24" color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Search;
