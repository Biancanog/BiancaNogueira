import { StatusBar } from "expo-status-bar";
//import { StyleSheet, Text, View } from "react-native";
import React from "react"; 

import { SafeAreaView, StyleSheet } from "react-native"; 
import TelaScreen  from './src/LoginScreen'; 
const App = () => {
  return (
      <SafeAreaView>
          <LoginScreen/>
      </SafeAreaView>
  );
}; 

const styles = StyleSheet.create({
        container: {
                flex: 1,
        },
}); 

export default App;