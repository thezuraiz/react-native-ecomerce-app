import { useRouter } from "expo-router";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="items-center justify-center flex-1 px-4 pt-32">
        {/* Image */}
        <Image
          width={300}
          className="aspect-square"
          resizeMode="contain"
          source={{
            uri: "https://img.freepik.com/free-vector/brown-sofa-furniture-with-lamp-tree-isolated-white-background_1308-53106.jpg?semt=ais_hybrid&w=740&q=80",
          }}
        />

        {/* Title & Description */}
        <View className="w-4/5">
          <Text className="text-3xl font-medium text-center">
            Welcome to FunitureWorld
          </Text>
          <Text className="my-5 text-center text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
            tenetur beatae tempora delectus, cupiditate asperiores magni ex nam
            numquam rem, voluptatem iure molestiae?
          </Text>
        </View>

        {/* Spacer to push buttons to bottom */}
        <View className="flex-1" />

        {/* Buttons */}
        <View className="w-full pb-6">
          <TouchableOpacity
            onPress={() => {
              router.push("/login");
            }}
            className="px-4 py-3 mx-4 my-2 bg-emerald-800 rounded-xl"
          >
            <Text className="text-xl font-semibold text-center text-white">
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push("/register");
            }}
            className="px-4 py-3 mx-4 my-2 bg-emerald-200 rounded-xl"
          >
            <Text className="text-xl font-semibold text-center text-black">
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
