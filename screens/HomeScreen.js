import { SafeAreaView, Text, View, Platform, StatusBar, Image } from "react-native";
import { ChevronDownIcon, UserIcon, SearchIcon } from "react-native-heroicons/outline";

export default function HomeScreen() {
  const paddingTop = Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0;
  console.log("Status Bar Height", paddingTop);
  return (
    <SafeAreaView style={{ paddingTop: paddingTop }}>
      <View className='flex flex-row space-x-2 items-center'>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
          }}
          className='w-7 h-7 rounded-full p-4 bg-gray-400 ml-2'
        />
        <View className='flex items-left'>
          <Text className='text-gray-600 text-xs'>Deliver Here</Text>
          <View className="flex flex-row items-center">
            <Text className='font-bold text-lg'>Current Location</Text>
            <ChevronDownIcon size={20} color="#00ccbb" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
