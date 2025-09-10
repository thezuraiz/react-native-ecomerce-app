import { DirectRight } from "iconsax-react-native";
import { Text, TextInput, View } from "react-native";

export default function InputWithIcon({
  placeholder = "",
  value,
  icon = <DirectRight size="24" color="gray" />,
  heading = "Email:",
  ...rest
}: InputWithIconProps) {
  return (
    <View className="w-full my-2">
      <Text className="mb-1 text-base font-semibold text-gray-600">
        {heading}
      </Text>
      <View className="flex-row items-center w-full gap-2 px-3 py-3 border border-gray-400 rounded-lg">
        <View>{icon}</View>
        <TextInput placeholder={placeholder} className="flex-1 ml-2" />
      </View>
    </View>
  );
}
