import { useNavigation } from "@react-navigation/native";
import { Add } from "iconsax-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

type ProductCardProps = {
  imageUrl: string;
  title: string;
  price: number;
  category?: string;
};

const ProductCard = ({
  imageUrl,
  title,
  price,
  category,
}: ProductCardProps) => {
  let navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("product-details" as never)}
      className="justify-center mr-4 bg-blue-50 w-[180px]  rounded-2xl p-1"
    >
      <Image
        source={{ uri: imageUrl }}
        className="w-full mb-2 rounded-2xl aspect-square"
        resizeMode="cover"
      />
      <Text className="px-1 text-base font-semibold">{title}</Text>
      <Text className="px-1 text-sm font-medium">{category}</Text>
      {/* Button */}
      <View className="flex-row items-center justify-between px-1">
        <Text className="text-xl font-bold text-black">${price}</Text>
        <TouchableOpacity className="flex-row items-center justify-center w-8 h-8 rounded-full bg-emerald-900">
          <Add size="24" color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
