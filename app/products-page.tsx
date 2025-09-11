import ProductCard from "@/components/home/ProductCard";
import useFetch from "@/hooks/useFetch";
import { useNavigation } from "expo-router";
import { DirectLeft } from "iconsax-react-native";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProductPage = () => {
  const { data, isLoading, error } = useFetch<Product>({
    url: "http://localhost:3132/api/products/",
  });
  const navigation = useNavigation();
  return (
    <SafeAreaView className="mx-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center gap-2 p-0.5  rounded-full bg-emerald-900 my-2">
          <TouchableOpacity
            className="p-2 bg-white rounded-full"
            onPress={() => navigation.goBack()}
          >
            <DirectLeft size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-xl font-medium text-white">Products</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            className="items-center justify-center flex-1 my-10"
            color="#0000ff"
          />
        ) : error ? (
          <Text>Error fetching products</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item._id.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            renderItem={({ item }) => <ProductCard {...item} />}
            ListFooterComponent={<View className="my-5"></View>}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductPage;
