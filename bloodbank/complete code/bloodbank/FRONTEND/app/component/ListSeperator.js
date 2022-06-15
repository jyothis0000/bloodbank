
import React, { Component, useState } from "react";
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class listseperator extends Component{
    render(){
      return(
  <View style ={
    styles.containers
  }>
    
    
 
  </View>
      );
    }
  }
  const styles = StyleSheet.create({
   
    containers:{
      flex: 1,
      
      backgroundColor:"#C8C8C8",
      padding:10,
      height:10
    },
    item: {
      
    },
    title: {
      fontSize:10,  
    },
    Swipeable:{
      color:'blue',
      justifyContent:'center',
  width:'30',
  backgroundColor:'gold'
  
      
    },
    
  
  });
  