import InputWithIcon from "@/components/TextInputWithIcon";
import {
  Call,
  DirectRight,
  PasswordCheck,
  Setting,
} from "iconsax-react-native";
import React from "react";
import {
  Image,
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="px-4 py-2">
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <ScrollView>
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
            {/* Fields  */}

            <InputWithIcon
              heading="Your Email"
              placeholder="thezuraiz@gmail.com"
              icon={<DirectRight size={20} color="gray" />}
            />
            <InputWithIcon
              heading="Phone Number"
              placeholder="0300 1234 029"
              icon={<Call size={20} color="gray" />}
            />
            <InputWithIcon
              heading="Password"
              icon={<PasswordCheck size={20} color="gray" />}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Profile;
