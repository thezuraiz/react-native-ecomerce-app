import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import {
  AddCircle,
  ArrowLeft2,
  Heart,
  Location,
  MinusCirlce,
  ShoppingBag,
  Star,
  TruckFast,
} from "iconsax-react-native";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const ProductScreen = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [counter, setCounter] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params;
  return (
    <View className="flex-1">
      <View className="absolute z-10 flex-row items-center justify-between w-full p-4 top-10">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 bg-black rounded-full"
        >
          <ArrowLeft2 color="white" size={20} />
        </TouchableOpacity>
        <TouchableOpacity className="p-2" onPress={() => setIsLiked(!isLiked)}>
          <Heart
            size={24}
            color={isLiked ? "red" : "grey"}
            variant={isLiked ? "Bold" : "Outline"}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: product.imageUrl,
        }}
        className=" aspect-square"
      />
      <ScrollView className="flex-1 rounded-xl mt-[-10] bg-white p-6">
        <View className="flex-row items-center justify-between ">
          <Text className="w-3/5 text-2xl font-bold" numberOfLines={1}>
            {product.title}
          </Text>
          <View className="px-2 bg-blue-100 rounded-full">
            <Text className="text-lg font-bold">${product.price}</Text>
          </View>
        </View>
        {/* Ratings & Counter */}
        <View className="flex-row items-center justify-between my-2">
          <View className="flex-row items-center gap-2 my-2">
            <View className="flex-row ">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star color="orange" variant="Bold" size={24} key={i} />
              ))}
            </View>
            <Text className="text-base font-medium text-gray-500">(4.9)</Text>
          </View>
          <View className="flex-row gap-1">
            <TouchableOpacity
              disabled={counter === 0}
              onPress={() => setCounter(Math.max(0, counter - 1))}
            >
              <MinusCirlce color="gray" size={24} variant="Outline" />
            </TouchableOpacity>
            <Text className="text-base font-semibold text-gray-500">
              ({counter})
            </Text>
            <TouchableOpacity onPress={() => setCounter(counter + 1)}>
              <AddCircle color="gray" size={24} variant="Outline" />
            </TouchableOpacity>
          </View>
        </View>
        {/* Discription  */}
        <Text className="mt-2 text-2xl font-medium">Desciption</Text>
        <Text className="text-base font-normal text-justify text-gray-500">
          {product.description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas, ab
          perferendis recusandae molestias totam necessitatibus veniam harum
          numquam quaerat? Molestias ut natus distinctio quisquam eius minus
          ducimus. Esse similique, obcaecati necessitatibus neque ab
          praesentium, sequi, in distinctio porro labore cumque nobis aliquam
          voluptate possimus.
        </Text>
        {/* Address */}
        <View className="flex-row items-center justify-between p-2 mt-4 rounded-full bg-blue-50">
          <View className="flex-row items-center gap-2">
            <Location color="black" size={20} variant="Outline" />
            <Text className="font-medium">Dallas</Text>
          </View>
          <View className="flex-row items-center gap-2">
            <TruckFast color="black" size={20} variant="Outline" />
            <Text className="font-medium">Free Delevery</Text>
          </View>
        </View>
        {/* Cart Button  */}
        <View className="flex-row justify-between my-4">
          <TouchableOpacity className="flex items-start justify-center w-2/3 px-5 bg-black rounded-full">
            <Text className="text-xl font-semibold text-white">BUY NOW</Text>
          </TouchableOpacity>
          <View className="p-2 bg-black rounded-full ">
            <ShoppingBag color="white" variant="Bold" size="20" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductScreen;
