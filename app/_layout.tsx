import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { ArrowLeft } from "iconsax-react-native";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import "../app/global.css";

export default function RootLayout() {
  const [loaded] = useFonts({
    regular: require("../assets/fonts/Poppins-Regular.ttf"),
  });
  const router = useRouter();

  if (!loaded) {
    return null;
  }

  function ToastWithSafeArea() {
    const insets = useSafeAreaInsets();
    return <Toast swipeable={true} topOffset={insets.top} />;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack initialRouteName="login">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="product-details" options={{ headerShown: false }} />
        <Stack.Screen
          name="cart-page"
          options={{
            headerShown: true,
            title: "Cart",
            // headerBackVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()}>
                <ArrowLeft size={24} color="black" variant="Outline" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="products-page" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
      <ToastWithSafeArea />
    </ThemeProvider>
  );
}
