import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = () => {
  const [value, setValue] = useState("");
  return (
    <View
      style={{
        flex: 1,
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
        <Ionicons name="mf-arrow-back" size={32} />
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
    </View>
  );
};

export default SearchScreen;
