import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowLongRightIcon } from "react-native-heroicons/outline";

const ViewAll = () => {
  return (
    <View className='flex-row justify-between mt-4 px-2'>
      <View>
        <Text className='text-lg font-bold'>View All</Text>
        <Text className="text-gray-500">Explore all the items at one go</Text>
      </View>
      <TouchableOpacity>
        <ArrowLongRightIcon size={35} color='gray' />
      </TouchableOpacity>
    </View>
  );
};

export default ViewAll;
