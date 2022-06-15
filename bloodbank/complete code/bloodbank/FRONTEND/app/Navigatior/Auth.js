import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import WelcomeScreen from '../../screens/WelcomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import SplashScreen from '../../screens/SplashScreen';
import HomeScreen from '../../screens/HomeScreen';
import AddDetails from '../../screens/AddDetails';
import MainScreen from '../../screens/MainScreen';
import MyDrawer from './Drawer';
const Stack = createNativeStackNavigator();
const AuthNavigator=()=>(
    <Stack.Navigator initialRouteName={SplashScreen} screenOptions={{ headerTintColor:"white", headerStyle:{backgroundColor:"#F46B6B"} }}>
      
      
      <Stack.Screen options={{headerShown:false}} name="SplashScreen" component={SplashScreen} />
      <Stack.Screen  name="HomeScreen"component={HomeScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> 
      <Stack.Screen name="LoginScreen" component={LoginScreen} /> 
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> 
      <Stack.Screen name="AddDetails" component={AddDetails} /> 
      <Stack.Screen name="MainScreen" component={MainScreen} />
      {/* <Stack.Screen  name="MainScreen" component={MyDrawer}  options={{title:"MainScreen",headerTintColor: '#fff',headerStyle:{backgroundColor:"#2C78E4"}} } /> */}

    </Stack.Navigator>
)




  
const styles = StyleSheet.create({
  container: {}
});

export default AuthNavigator;