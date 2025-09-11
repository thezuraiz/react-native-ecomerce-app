import ProductCard from "@/components/home/ProductCard";
import useCartStore from "@/store/cart";
import { ShoppingCart } from "iconsax-react-native";
import React from "react";
import { FlatList, Text, View } from "react-native";

const CartPage = () => {
  const useCart = useCartStore();
  let cartItems = useCart.cart;
  let cartLength = useCart.getCartLength();

  if (cartLength === 0) {
    return (
      <View className="items-center justify-center flex-1">
        <ShoppingCart size="200" color="gray" variant="Broken" />
        <Text className="mt-4 text-3xl font-bold">Cart Empty</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={cartItems}
      numColumns={2}
      contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => <ProductCard {...item} />}
      ListFooterComponent={<View className="my-6" />}
    />
  );
};

export default CartPage;
