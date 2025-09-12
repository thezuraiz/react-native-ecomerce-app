import InputWithIcon from "@/components/TextInputWithIcon";
import { router, useNavigation } from "expo-router";
import {
  Call,
  DirectRight,
  Eye,
  EyeSlash,
  PasswordCheck,
  Setting,
} from "iconsax-react-native";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 px-4 py-2 ">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1">
          <View className="flex-row items-center justify-end">
            <TouchableOpacity>
              <Setting size={20} color="black" />
            </TouchableOpacity>
          </View>

          <View className="flex items-center justify-center ">
            {/* Profile */}
            <View className="flex items-center justify-center gap-2 my-4">
              <Image
                source={{
                  uri: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
                }}
                className="w-32 h-32 rounded-full"
              />
              <Text className="text-2xl font-bold">Profile Name</Text>
            </View>

            {/* Fields */}
            <InputWithIcon
              heading="Your Email"
              placeholder="thezuraiz@gmail.com"
              icon={<DirectRight size={20} color="black" />}
            />
            <InputWithIcon
              heading="Phone Number"
              placeholder="0300 1234 029"
              icon={<Call size={20} color="black" />}
            />

            {/* Password Field */}
            <View className="w-full my-2">
              <Text className="mb-1 text-base font-semibold text-gray-600">
                Password
              </Text>
              <View className="flex-row items-center w-full gap-2 px-3 py-3 border border-gray-400 rounded-lg">
                <PasswordCheck size={22} color="black" />
                <TextInput
                  placeholder="password"
                  className="flex-1"
                  secureTextEntry={showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword((e) => !e)}>
                  {showPassword ? (
                    <Eye size={22} color="black" />
                  ) : (
                    <EyeSlash size={22} color="black" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Logout Button */}
          <TouchableOpacity
            onPress={() => {
              // navigation.reset({
              //   index: 0,
              //   routes: [{ name: "/" as never }],
              // });
              router.replace("/");
            }}
            className="absolute w-full px-4 py-3 my-4 border rounded-lg shadow bottom-12 border-emerald-600"
          >
            <Text className="text-base font-bold text-center uppercase text-emerald-600">
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Profile;
