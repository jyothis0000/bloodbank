import React from 'react';
import { StyleSheet, View,Image,Text} from 'react-native';

import Constants from "expo-constants";
function  Lister ({title, subtitle,Image}){
    return(
<View style =
{ styles.card}>

<Text style ={styles.text}> mosh hamedhani</Text>
<Text style={styles.texttwo}>5 listings</Text>
</View> 

    );

}
const styles= StyleSheet.create(
    {
     card:{
           
         

        
           right:5,
           left:10,
           
    


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
export default Lister;

