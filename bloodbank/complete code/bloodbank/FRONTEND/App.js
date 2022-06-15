import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,} from 'react-native';
import AppButton from './app/component/AppButton';



import HomeScreen from './screens/HomeScreen';


import MyAccountScreen from './screens/MyAccount';
import Email from './app/component/Email';
import MainScreen from './screens/MainScreen';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AddDetails from './screens/AddDetails';
import {NavigationContainer} from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationTheme from './app/Navigatior/NavigationTheme';
import AuthNavigator from './app/Navigatior/Auth';
// import LoginScreen1 from './screens/LoginScreen1';

const Stack = createNativeStackNavigator();
function App(){
  return (

    // <NavigationContainer>

//  <MainScreen/> 
 //<MyAccountScreen/> 
 
//  <ViewImagescreen/>
  // <HomeScreen/> 
  // <SplashScreen/>
  // <LoginScreen/>
  // <RegisterScreen/>
  // <WelcomeScreen/>
//   <AddDetails/>
//   );
// }
<NavigationContainer theme={NavigationTheme}> 

<AuthNavigator></AuthNavigator>
{/* <TabNav></TabNav> */}
</NavigationContainer> 


);
<li>
<input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
<button onClick={() => this.props.deleteTodo(this.props.id)}>Delete</button>
<span>{ this.props.description }</span>
</li>

  
}
export default App;

const styles = StyleSheet.create({
  container: {
   
    
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center'
  }
});





