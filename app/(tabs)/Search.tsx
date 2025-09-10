import SearchProductCard from "@/components/ui/SearchProductCard";
import useFetch from "@/hooks/useFetch";
import { Camera, SearchNormal1 } from "iconsax-react-native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const {
    data = [],
    error,
    isLoading,
    refresh,
  } = useFetch({
    url: `http://localhost:3132/api/products/search/${searchKey}`,
  });

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchKey.trim().length > 0) {
        refresh();
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchKey]);

  console.log("key: ", searchKey);
  console.log("Data: ", data.length);
  console.log("Error: ", error);

  return (
    <SafeAreaView className="flex-1 px-3">
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1">
            {/* Search bar */}
            <View className="flex-row items-center justify-between my-4 bg-blue-100 rounded-lg">
              <TouchableOpacity className="px-4">
                <Camera size="24" color="black" />
              </TouchableOpacity>
              <TextInput
                className="flex-1 h-full"
                value={searchKey}
                onChangeText={setSearchKey}
                placeholder="What are you looking for"
              />
              <TouchableOpacity className="p-2 rounded-lg bg-emerald-950">
                <SearchNormal1 size="24" color="white" />
              </TouchableOpacity>
            </View>

            {/* Results */}
            {isLoading ? (
              <Text className="mt-10 text-center">Loading...</Text>
            ) : error ? (
              <Text className="mt-10 text-center">
                Something went wrong {data.title}
              </Text>
            ) : data?.length == 0 ? (
              <View className="flex-1 mt-36">
                <Image
                  style={{ width: 300, height: 240, alignSelf: "center" }}
                  source={{
                    uri: "https://assets.streamlinehq.com/image/private/w_800,h_800,ar_1/f_auto/v1/icons/seoul/shopping/shopping/empty-cart-9p91f0l3qq8hn5t9m6fqzl.png?_a=DATAg1AAZAA0",
                  }}
                  resizeMode="contain"
                />
              </View>
            ) : (
              <FlatList
                data={data}
                keyExtractor={(item, index) =>
                  item._id?.toString() || index.toString()
                }
                renderItem={({ item }) => <SearchProductCard item={item} />}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
