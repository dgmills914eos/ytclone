import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, Image, Dimensions } from 'react-native';



const MiniCard = () => {
   return (
    <View style={{flexDirection:"row", margin:10, marginBottom:0}}>
        <Image
            source={{uri:"https://images.unsplash.com/photo-1446457292373-a8e0bb763287?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" }}
            style={{
                width:"45%",
                height:100
            }}
        />
        <View style={{
            paddingLeft:7
        }}>
            <Text 
            style={{
                fontSize:17,
                width:Dimensions.get("screen").width/2
            }}
            ellipsizeMode="tail"
            numberOfLines={3}
            >
                This is an amazing course.  This is an amazing course This is an amazing course This is an amazing course. This is an amazing course This is an amazing course This is an amazing course
            </Text>
            <Text style={{fontSize:12}}>
                coders never quit
            </Text>
        </View>
    </View>

    )
}

export default MiniCard