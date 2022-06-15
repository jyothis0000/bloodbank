import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet,Text,Button, ImageBackground} from 'react-native';
import AppText from '../app/component/Apptext';
import AppTextInput from '../app/component/AppTextinput';
import SubmitButton from '../app/component/SubmitButton';
import AppButton from '../app/component/AppButton';
import * as yup from 'yup'
// import AppButton from '../app/component/AppButton';
// import colors from '../app/component/config/colors';
const loginValidationSchema =yup.object().shape ({ 
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required')
    .matches("@gmail.com"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required('Password is required'),
})
function LoginScreen({navigation}) {
  return (
   
  
    <View style={styles.container}>
        
<Text style={styles.text}> Welcome !</Text>
<Formik 
initialValues={{email:"",password:""}}
onSubmit={values=>console.log(values)}
validationSchema={loginValidationSchema}>
 {({handleChange, handleBlur, handleSubmit,values,errors,isValid,touched,setFieldTouched})=>(
       <>
       <View style={styles.APP}>
         <AppText style={styles.addtext}>EMAIL</AppText>
<AppTextInput placeholder="Email" keyboardType="email-address"

autoCorrect={false}
onChangeText={handleChange("email")}>
</AppTextInput>
{(errors.email && touched.email) &&
                  <Text style={styles.errorText}>{errors.email}</Text>}
                    <AppText style={styles.addtext}>PASSWORD</AppText>
                  <AppTextInput placeholder="password" keyboardType="default"

autoCorrect={false} 
secureTextEntry={true}
onChangeText={handleChange("password")}
onBlur= { ()=>setFieldTouched("password")}>
 
</AppTextInput>
{(errors.password && touched.password) &&

                  <Text style={styles.errorText}>{errors.password}</Text>}
                  
<AppButton title="Log In"  mypress={()=>navigation.navigate('WelcomeScreen')}   mycolor="#F46B6B"/>
{/* <Button title="signin"  color="#F46B6B" onPress={() =>navigation.push('Profile')}></Button> */}
{/* <AppButton title="LOGIN " color= "primary" mypress= {()=>{console.log('on login')}}  ></AppButton> */}
</View>
       </>
          )}
</Formik>
<Text style={styles.add}> Need Account?  signup as a new customer</Text>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#F7C9C9",
    flex:1,
 
  },
  text:{
    fontSize:35,
    color:"red",
    justifyContent:"center",
    alignSelf:"center",
    top:80
  },
  APP:{
    top:200,
width:"100%",
height:70,
borderRadius:50,

  },
  errorText:{
    color:"red",
    fontSize:15,
    fontWeight:"bold"
},
add:{
  justifyContent:"center",
  alignSelf:"center",
  fontSize:10,
  top:390

},addtext:{
  fontSize:15,

}

});

export default LoginScreen;