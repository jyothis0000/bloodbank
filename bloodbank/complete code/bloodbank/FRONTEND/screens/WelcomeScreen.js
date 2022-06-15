import React from 'react';
import { View ,StyleSheet, ImageBackground, Image, TouchableOpacity,Text, TouchableHighlight} from 'react-native';
import AppButton from '../app/component/AppButton';

const WelcomeScreen = ({navigation}) =>
{
   return(
       
    <ImageBackground  blurRadius={0.1} style = { styles.backgroundImage}source = {
      require('../assets/welcome.png') 
   
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
  <View style={{marginTop:350,padding:20,top:140,marginVertical:10,justifyContent:'center',width:"100%"}}>   
<AppButton title="ADD DONATION " color= "primary" mypress={()=>navigation.navigate('AddDetails')}  ></AppButton>
<AppButton title="VIEW DONATION" color= "primary" mypress={()=>navigation.navigate('MainScreen')}  ></AppButton>
<AppButton title="MANAGE DONATION" color= "primary" mypress={()=>navigation.navigate('MainScreen')}  ></AppButton>
</View>
       </ImageBackground>
 
    );
 
 }

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    padding:40,
    marginBottom:20 ,
    marginTop:60
  },
  logo:{
width:"95%",
height:40,
backgroundColor:'#fc5c65',
borderRadius:35,
margin:70,
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
export default WelcomeScreen;
