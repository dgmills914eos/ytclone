import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import Constant from 'expo-constants';


export default function Header() {
  return (
    <View style={{
        marginTop:Constant.statusBarHeight,
        height:40,
        backgroundColor:"skyblue"
    }}>
      <Viewstyle={{
          flexDirection:"row"
      }}>
          <AntDesign name="youtube", size={28} color="red" />
          <Text style={{
              fontSize:22
          }}>YouTube</Text>
      </View>
      <View></View>
    </View>
  );
}