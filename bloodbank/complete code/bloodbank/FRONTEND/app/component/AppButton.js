import React from 'react';
//import {useDeviceOrientation} from  '@react-native-community/hooks';
import { Platform, SafeAreaView, StyleSheet, View,TouchableOpacity,Image ,Text} from 'react-native';
import colors from '../component/config/colors';
function  AppButton({title, mypress, color= "primary"})
{
    return(
<TouchableOpacity  style={[styles.button, { backgroundColor:colors[color]}]}
     onPress={mypress}>
    <Text style ={ styles.text}>{title}</Text>

</TouchableOpacity>
    );
}



const styles= StyleSheet.create(
    {
        button:{
            backgroundColor:colors.secondary,
            height:40,
            width:"95%",
            borderRadius:35,
           justifyContent:'center',
           alignItems:'center',
           padding:10,
           marginVertical:10

        },
        text:{
  color:'white',
  fontSize:18,
  textTransform:'uppercase',
  fontWeight:'bold'
        }
    }
)

export default AppButton;







// export default function Buttoncomp() {
    
//     return(
// <View style = { styles.container}>
//  <View style ={styles.logo}>
//         <Text style = {styles.text}onPress={() => { console.log("onPress") }} > LOGIN</Text>
//     </View>
// </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//       flex:1,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor:'white'
//     },
// logo:{
//         width:"95%",
//         height:40,
//         backgroundColor:'#fc5c65',
//         borderRadius:20 ,
//         alignItems: "center",
       
//       },
//       text :{
// color:'white',
// fontSize:15,
// justifyContent:'center',
// padding:10,

//       }
//   });
