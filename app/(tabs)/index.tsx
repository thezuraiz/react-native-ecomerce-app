import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
      <Text className="text-2xl font-bold text-blue-600">
        Hello NativeWind 👋
      </Text>
    </SafeAreaView>
  );
}
