import React from 'react';
import { StyleSheet, View,Image,Text,StatusBar} from 'react-native';

import Constants from "expo-constants";
function  Profilelister ({title, subtitle,Image}){
    return(
<View style =
{ styles.card}>

<Text style ={styles.text}> JYOTHIS MANOJ</Text>
<Text style={styles.texttwo}>jyothismanoj000@gmail.com</Text>
</View> 

    );

}
const styles= StyleSheet.create(
    {
     card:{
           
         

        
          
       marginTop:20,
       marginBottom:15,
     
    
    marginTop: StatusBar.currentHeight ||20,
           marginTop: Constants.statusBarHeight,


        },
         text:{
   color:'black',   
   fontSize:18,

  fontWeight:'bold',
  left:20,
  textTransform:"uppercase",
 



       },
       texttwo:{
      
        fontSize:13,
        color:"#A0A0A0",
       left:20,
   
      


           }
    }
)
export default Profilelister;

