import { Text, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";

const CategoryCard = ({ imgUrl, title }: { imgUrl: string; title: string }) => {
  return (
    <TouchableOpacity
      style={{
        paddingRight: 10,
        position: "relative",
      }}
    >
      <Image
        source={{
          uri: imgUrl,
          width: 100,
          height: 100,
        }}
        style={{
          borderRadius: 15,
        }}
      />
      <Text
        style={{
          position: "absolute",
          color: "#fff",
          left: 5,
          bottom: 5,
          fontSize: 20,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
