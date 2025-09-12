import CustomDivider from "@/components/ui/CustomDivider";
import { router } from "expo-router";
import {
  Apple,
  ArrowLeft,
  DirectRight,
  Google,
  Microscope,
  PasswordCheck,
} from "iconsax-react-native";
import React from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RegisterScreen = () => {
  return (
    <SafeAreaView className="flex-1 " style={{ padding: 10 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="flex-1 px-5">
          {/* Back Arrow */}
          <ArrowLeft size={23} color="black" onPress={() => router.back()} />

          {/* Headings */}
          <View className="my-5">
            <Text className="mt-2 text-4xl font-bold">Create an Account</Text>
            <Text className="my-1 text-3xl font-medium">Welcome!</Text>
            <Text className="text-base font-medium text-gray-600">
              Please sign up to get started
            </Text>
          </View>

          {/* Fields */}
          <View className="gap-5 mt-10">
            <View className="flex flex-row items-center justify-start w-full gap-2 p-2 border border-gray-300 rounded-xl">
              <DirectRight size={24} color="gray" />
              <TextInput
                placeholder="Enter Email"
                className="py-2 "
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View className="flex flex-row items-center justify-start w-full gap-2 p-2 border border-gray-300 rounded-xl">
              <PasswordCheck size={24} color="gray" />
              <TextInput
                placeholder="Enter Password"
                className="py-2 "
                autoCapitalize="none"
              />
            </View>

            <View className="flex flex-row items-center justify-start w-full gap-2 p-2 border border-gray-300 rounded-xl">
              <PasswordCheck size={24} color="gray" />
              <TextInput
                placeholder="Confirm Password"
                className="py-2 "
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            {/* Sign Up Button */}
            <TouchableOpacity
              className="p-4 mt-5 rounded-xl bg-emerald-800"
              onPress={() => router.push("/(tabs)/home")}
            >
              <Text className="text-lg font-semibold text-center text-white">
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <CustomDivider title={"Or Register With"} />
          <View className="flex-row items-center justify-around gap-2 mx-0 ">
            <View className="items-center flex-1 py-2 border border-gray-300 rounded-md">
              <Google size="32" color="gray" />
            </View>
            <View className="items-center flex-1 py-2 border border-gray-300 rounded-md">
              <Apple size="32" color="gray" />
            </View>
            <View className="items-center flex-1 py-2 border border-gray-300 rounded-md">
              <Microscope size="32" color="gray" />
            </View>
          </View>
          <View className="absolute flex-row justify-center bottom-5 left-5 right-5">
            <Text className="text-center">Already have an account? </Text>
            <TouchableOpacity onPress={() => router.dismissTo("/login")}>
              <Text className="font-bold text-emerald-800">Login Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default RegisterScreen;
