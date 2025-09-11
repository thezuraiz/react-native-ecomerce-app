import useCartStore from "@/store/cart";
import { useNavigation } from "@react-navigation/native";
import { Add, ShoppingCart } from "iconsax-react-native";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

const ProductCard = (product: Product) => {
  const navigation = useNavigation<any>();
  const cartStore = useCartStore();
  const isAlreadyAdded = cartStore.isInCart(product._id);
  const showToast = (title: string) => {
    Toast.show({
      type: "success",
      text1: title,
      text2: "Your item has been added to the cart 👌",
    });
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("product-details", { product: product });
      }}
      className="justify-center mr-4 bg-blue-50 w-[180px] rounded-2xl p-1"
    >
      <Image
        source={{ uri: product.imageUrl }}
        className="w-full mb-2 rounded-2xl aspect-square"
        resizeMode="cover"
      />
      <Text className="px-1 text-base font-semibold" numberOfLines={1}>
        {product.title}
      </Text>
      <Text className="w-3/4 px-1 text-sm font-medium" numberOfLines={1}>
        {product.supplier}
      </Text>
      {/* Button */}
      <View className="flex-row items-center justify-between px-1">
        <Text className="text-xl font-bold text-black">${product.price}</Text>
        <TouchableOpacity
          className="flex-row items-center justify-center w-8 h-8 p-1 rounded-full bg-emerald-900"
          onPress={() => {
            if (isAlreadyAdded) {
              showToast("Product Removed");
              Alert.alert(
                "Confirm",
                "Are you sure to remove product from cart",
                [
                  {
                    text: "Remove",
                    onPress: () => cartStore.removeFromCart(product._id),
                  },
                  {
                    text: "Cancel",
                    // onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                ]
              );
            } else {
              showToast("Product Added");
              cartStore.addToCart(product);
            }
          }}
        >
          {isAlreadyAdded ? (
            <ShoppingCart size="20" color="white" variant="Broken" />
          ) : (
            <Add size="24" color="white" />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
