import CarouselSlider from "@/components/home/carousel";
import ProductRow from "@/components/home/ProductRow";
import Welcome from "@/components/home/welcome";
import CustomHeading from "@/components/ui/CustomHeading";
import useCartStore from "@/store/cart";
import { useNavigation } from "expo-router";
import { Location, ShoppingCart } from "iconsax-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const navigation = useNavigation();
  const cartStore = useCartStore();
  return (
    <SafeAreaView className="px-3 my-2">
      {/* App Bar  */}
      <View className="flex-row items-center justify-between">
        <Location size="28" color="black" />
        <Text className="text-xl font-bold text-gray-700">Lahore Pakistan</Text>
        <TouchableOpacity
          className="relative"
          onPress={() => navigation.navigate("cart-page" as never)}
        >
          <ShoppingCart size="28" color="black" />
          <View className="absolute px-1 bg-red-600 rounded-full -top-1 -right-1">
            <Text className="text-xs font-bold text-white">
              {cartStore.getCartLength()}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Welcome />
        <CarouselSlider />
        <CustomHeading
          Heading="New Arrival"
          onPress={() => navigation.navigate("products-page" as never)}
        />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
}
