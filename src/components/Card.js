import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Card = () => {

    return(
        <View style={{marginBottom:10}}>
            <Image
            source={{uri:"https://images.unsplash.com/photo-1446457292373-a8e0bb763287?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" }}
            style={{
                width:"100%",
                height:200
            }}
            />
            <View style={{
                flexDirection:"row",
                margin:5
            }}>
            <MaterialIcons name="account-circle" size={40} color="#212121" />
                <View
                style={{
                    marginLeft:10
                }}
                >
                    <Text style={{
                        fontSize:20,
                        width:Dimensions.get("screen").width - 50
                    }}                    
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    >Random text here. Random text here andom text here. Rando</Text>
                    <Text
                    >Random text here. Random text here.Random text here. Random text here</Text>
                </View>
                
            </View>
        </View>
    )
}

export default Card

