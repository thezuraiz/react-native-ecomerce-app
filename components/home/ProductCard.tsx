import { useNavigation } from "@react-navigation/native";
import { Add } from "iconsax-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ProductCard = (product: Product) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("product-details", { product: product })
      }
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
        <TouchableOpacity className="flex-row items-center justify-center w-8 h-8 rounded-full bg-emerald-900">
          <Add size="24" color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
