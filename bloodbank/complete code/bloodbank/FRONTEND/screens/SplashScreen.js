import React from 'react';
import { View ,StyleSheet, ImageBackground, Image, TouchableOpacity,Text, TouchableHighlight} from 'react-native';
import AppButton from '../app/component/AppButton';
import NavigationTheme from '../app/Navigatior/NavigationTheme';

const SplashScreen = ({navigation}) =>
{
   return(
       
    <ImageBackground   style = { styles.backgroundImage}source = {
      require('../assets/s1.png') 
   
    } > 
   <View style={styles.logoandtext}>
            {/* <Image style={styles.lom} source={require("../assets/logo.png")}></Image> */}
         
            </View>

            {/* <View style ={styles.logo}>
        <Text style = {styles.text} onPress={() => { console.log("onregister") }}> LOGIN</Text>
    </View>
    */}
    {/* <View style ={styles.register}  >
      <Text style = {styles.text} onPress={() => { console.log("onPress") }}> REGISTER</Text>
    </View> */}
      {/* <Text>Not useless , know your worth
              Donate Blood ! </Text>  */}
<AppButton title="Get Start " color= "primary" mypress={()=>navigation.navigate('HomeScreen')}  ></AppButton>

       </ImageBackground>
 
    );
 
 }

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    padding:50,
    marginBottom:50 
  },
  logo:{
width:"95%",
height:40,
backgroundColor:'#fc5c65',
borderRadius:35,
margin:30,
justifyContent:'center',
alignItems:'center'
  },
  register:{
    width:"95%",
    height:40,
    backgroundColor:'#4ECDC4',
    borderRadius:35,
   marginBottom:50,
   justifyContent:'center',
   alignItems:'center'
  },
  lom:{
    width:50,
    height:50,
   alignItems:'center',
   justifyContent:'center',
   left:40
  },
  backgroundImage:{
   flex:1,
   justifyContent:'flex-end',
   alignItems:"center",

    
  },
  logoandtext:{
       
    position:"absolute",
    top:20,
   
},
text :{
  color:'white',
  fontSize:15,
  justifyContent:'center',
 
  padding:60,
  
  
        }
});
export default SplashScreen;

