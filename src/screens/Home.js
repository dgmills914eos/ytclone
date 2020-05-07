import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'

export default function App() {
  return (
    <View>
      <Header />
        <ScrollView >
            <Card />
            <Card />    
            <Card />
            <Card />
        </ScrollView>
    </View>
  );
}

