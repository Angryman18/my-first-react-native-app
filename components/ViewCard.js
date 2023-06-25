import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ViewCard = ({ uri, text }) => {
  const dummyArray = [
    {
      id: 1,
      name: "John Doe",
      age: 25,
      city: "New York",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 30,
      city: "Los Angeles",
    },
    {
      id: 3,
      name: "Bob Johnson",
      age: 35,
      city: "Chicago",
    },
    {
      id: 4,
      name: "Alice Williams",
      age: 28,
      city: "San Francisco",
    },
  ];

  return (
    <TouchableOpacity className='mx-1'>
      <Image source={{ uri }} className='w-32 h-32 rounded-xl'></Image>
      <View style={Styles.gradient}></View>
      <Text className='absolute font-bold text-xl text-white text-center bottom-2 left-2'>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ViewCard;

const Styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3,
    borderRadius: 15,
    backgroundColor: "linear-gradient(90deg, rgba(5,3,129,1) 0%, rgba(255,255,255,1) 100%)",
  },
});
