import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MiniCard from '../components/MiniCard'

//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyCmIOEMii46kSp0JrCvp6t9xoA7i-h_0VM

const SearchScreen = () => {
  const [value, setValue] = useState("");
  const[miniCardData,setMiniCard] = useState([])
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          elevation: 5,
          backgroundColor:"red"
        }}
      >
        <Ionicons name="md-arrow-back" size={32} />
        <TextInput
          style={{
            width: "70%",
            backgroundColor: "#c6c6c6"
          }}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <Ionicons name="md-send" size={32} />
      </View>
      <ScrollView>
      <MiniCard />
      <MiniCard />
      <MiniCard />
      <MiniCard />
      <MiniCard />
      <MiniCard />
      <MiniCard />
      <MiniCard />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
