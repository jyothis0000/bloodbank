
import React, { Component, useState } from "react";
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import Constants from 'expo-constants';
// import { Swipeable } from "react-native-gesture-handler";
import  FlatListData from "../component/Data/flatlistdata";
import listseperator from "./ListSeperator";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "./config/colors";
// const renderLeftActions=()=>{
//   return(
//     <View style ={{backgroundColor:"gold" ,width:50}}></View>
//   )
// }
class FlatListItem  extends Component{
  render(){
    return(
  
      <View style={styles.container} >
    <Icon name='format-list-bulleted'  size={30}style={styles.Icon}></Icon>

        <View style={{flexDirection:'row',flex:1,}}> 
        
    
          <Text style={styles.text}>{this.props.item.title}</Text>
          
          
          </View>
       
      </View>
    
    );
  }
}
export default class ProfileMessage extends Component{
  render(){
    return( 
 
        
      <View style ={
      styles.containers
    }>
      <FlatList data={FlatListData}
      ItemSeparatorComponent={listseperator}
      onPress={() => { console.log("onPress") }}
      renderItem={({item,index})=>{
        return(
    <FlatListItem item={item} index={index} 
    ></FlatListItem>
        );
      }}>
    
      </FlatList>
    </View>
     

    );
  }
}
const styles = StyleSheet.create({
  container: {

    marginTop: StatusBar.currentHeight ||15,
    marginTop: Constants.statusBarHeight,

flexDirection:"row",
marginBottom:30,
justifyContent:"center",
alignItems:'center',
alignContent:"center",
alignSelf:"center"

  },
  containers:{
    flex: 1,
    marginTop: StatusBar.currentHeight ||10,
    marginTop: Constants.statusBarHeight,

    backgroundColor:'white'
  },
  item: {
    padding: 20,
    marginVertical: 9,
    marginHorizontal: 34,
    backgroundColor:"blue",
    justifyContent:'center',
alignItems:"center"
  },
  title: {
    fontSize:10,  
  },
 
    

 Icon:{
    width:41,
    height:40,
    borderRadius:20,
    color:'white',
    backgroundColor:colors.primary,
    justifyContent:"center",
alignItems:'center',
alignContent:"center",
alignSelf:"center"
  },
  text:{
    fontSize:18,
    left:14
   
  },
 

});

