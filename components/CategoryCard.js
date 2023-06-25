import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import ViewCard from "./ViewCard";

const weather = ["Food", "Vegetables", "Potato", "Orange", "Mixins", "Biriyani", "Spicy"];

const CategoryScreen = () => {
  let newArray = new Array(20).fill("").map((i, j) => {
    return { uri: `https://picsum.photos/id/${230 + j}/200/300`, name: weather[j] ?? "Other" };
  });
  return (
    <ScrollView className='my-4 mx-2'>
      <FlatList
        horizontal
        data={newArray}
        renderItem={({ item }) => <ViewCard uri={item.uri} text={item.name} />}
        keyExtractor={(item) => item.uri}
      />
    </ScrollView>
  );
};

export default CategoryScreen;
