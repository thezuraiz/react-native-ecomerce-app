import { Image, Text, View } from "react-native";

const SearchProductCard = ({ item }: any) => {
  return (
    <View className="flex flex-row gap-4 p-4 my-1 bg-white rounded-2xl">
      <View>
        <Image
          source={{ uri: item.imageUrl }}
          width={60}
          className="rounded-2xl aspect-square "
        />
      </View>
      <View className="flex items-start justify-center">
        <Text className="text-base font-bold ">{item.title}</Text>
        <Text className="text-sm font-medium ">{item.supplier}</Text>
      </View>
    </View>
  );
};

export default SearchProductCard;
