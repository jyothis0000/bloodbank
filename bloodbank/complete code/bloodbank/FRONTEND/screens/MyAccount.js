

import React ,{ Component, useState }from 'react';
import { StyleSheet,View,Image,Text,TouchableOpacity, FlatList,StatusBar} from 'react-native';
import Profilelister from '../app/component/profilelister';

import  FlatListData from "../app/component/Data/flatlistdata";
import listseperator from "../app/component/ListSeperator";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import colors from '../app/component/config/colors';
import Email from '../app/component/Email';
import ProfileMessage from '../app/component/ProfileMessage';


function MyAccountScreen(props) {
    
    return (
     
    <View style ={{flex:1,}}><View style = {styles.details}>

    

    <Image  style={styles.person} source= { require("../assets/Jo.jpg")}></Image> 
    <Profilelister></Profilelister>
 

    </View>
 
   <View style={{flex:2,left:10,top:-195,}}>
       
  <ProfileMessage></ProfileMessage>
  
  <Icon name='email'  size={30}style={styles.Icon}></Icon> 
  <Icon name='logout'  size={30}style={styles.logout}></Icon> 
   </View>

   <Text style={styles.textg}> MY messages</Text>
   <Text style={styles.logouttext}>LOG OUT</Text>
           </View>    

      
          
             
        
    );
}
const styles = StyleSheet.create({
    
    containers:{
   
        marginTop: StatusBar.currentHeight ||10,
        marginTop: Constants.statusBarHeight,
    left:30,
  marginBottom:20,
  backgroundColor:"#E8E8E8"
        
      },
 details:{
    
        
      marginTop:35,
        flex:1,
flexDirection:"row",
marginBottom:80,

       },
    person:{
         height:60,
         width:60,
         borderRadius:30,

        left:15,
        right:15,
top:10,
backgroundColor:"white"
       
    
    },
    Icon:{
        top:-120,
        backgroundColor:colors.secondary,
      
        borderRadius:20,
        right:-1,
        width:40,
        height:41,
        borderRadius:20,
        color:'white',
     
        justifyContent:'flex-start',
    alignItems:'flex-start',
    alignContent:"flex-start",
    alignSelf:"flex-start"
    },
    
    textg:{
        color:'black',   
        fontSize:18,
      textTransform:'uppercase',
      flexDirection:"column",
      top:-425,
       backgroundColor:"#fff",
  justifyContent:'center',
  alignSelf:"center",
  alignItems:'center',
 right:60

    },
    logout:{
        top:-55,
        backgroundColor:"#ffe66d",
      
        borderRadius:20,
        right:-1,
        width:41,
        height:40,
        borderRadius:20,
        color:'white',
     marginBottom:40,
        justifyContent:'flex-start',
    alignItems:'flex-start',
    alignContent:"flex-start",
    alignSelf:"flex-start"
    },
    logouttext:{
        color:'black',   
        fontSize:18,
      textTransform:'uppercase',
      flexDirection:"column",
      top:-345,
       backgroundColor:"#fff",
  justifyContent:'center',
  alignSelf:"center",
  alignItems:'center',
 right:80

    }
   
   

})

export default MyAccountScreen;