import React from 'react';
import { StyleSheet, View,Image,Text} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Constants from "expo-constants";
import colors from './config/colors';
function icon({name}){
    return(
<View style =
{ styles.card}>
<Icon name="format-list-bulleted" size={20} color={colors.primary}>  </Icon>
<Icon name="email" size={20} color={colors.secondary}>  </Icon>
</View> 

    );

}
const styles= StyleSheet.create(
    {
     card:{
           
         

        
         flex:1,
        justifyContent:"center"
    


        },
         text:{
   color:'black',   
   fontSize:10,
 textTransform:'uppercase',
  fontWeight:'bold',
  left:70,
   
  right:10


       },
       texttwo:{
      
        fontSize:10,
        color:"black",
       left:70,
   
right:10
      
           }
    }
)
export default Icon;

