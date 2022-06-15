import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet,Text,Button} from 'react-native';
import AppText from '../app/component/Apptext';
import AppTextInput from '../app/component/AppTextinput';
import SubmitButton from '../app/component/SubmitButton';
import * as yup from 'yup'
import AppButton from '../app/component/AppButton';
import colors from '../app/component/config/colors';
const loginValidationSchema =yup.object().shape ({ 
 name:yup
    .string()
   
    .required('name is Required')
   ,
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
    confirmpassword: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required('Confirm Password is required'),
})
function RegisterScreen({navigation}) {
  return (
    <View style={styles.container}>
<Text style={styles.text}> Welcome as a guest! </Text>
<Formik 
initialValues={{name:"",email:"",password:"",confirmpassword:""}}
onSubmit={values=>console.log(values)}
validationSchema={loginValidationSchema} >
 {({handleChange, handleBlur, handleSubmit,values,errors,isValid,touched,setFieldTouched})=>(
       <>
       <View style={styles.APP}>
       <AppText style={styles.addtext}>ENTER FULL NAME </AppText>
<AppTextInput placeholder="Enter Full Name"

autoCorrect={false}
onChangeText={handleChange("name")}>
</AppTextInput>
{(errors.name && touched.name) &&
                  <Text style={styles.errorText}>{errors.name}</Text>}
         <AppText style={styles.addtext}>EMAIL</AppText>
<AppTextInput placeholder="Enter Email ID" keyboardType="email-address"

autoCorrect={false}
onChangeText={handleChange("email")}>
</AppTextInput>
{(errors.email && touched.email) &&
                  <Text style={styles.errorText}>{errors.email}</Text>}
                    <AppText style={styles.addtext}>PASSWORD</AppText>
                  <AppTextInput placeholder="Enter password" keyboardType="default"

autoCorrect={false} 
secureTextEntry={true}
onChangeText={handleChange("password")}
onBlur= { ()=>setFieldTouched("password")}>
 
</AppTextInput>
{(errors.password && touched.password) &&

                  <Text style={styles.errorText}>{errors.password}</Text>}

<AppText style={styles.addtext}>CONFIRM PASSWORD</AppText>
                  <AppTextInput placeholder="Enter confirm password" keyboardType="default"

autoCorrect={false} 
secureTextEntry={true}
onChangeText={handleChange("password")}
onBlur= { ()=>setFieldTouched("password")}>
 
</AppTextInput>
{(errors.confirmpassword && touched.confirmpassword) &&

                  <Text style={styles.errorText}>{errors.confirmpassword}</Text>}         
                  
<AppButton title="Register"   Mycolor="buttoncolor" mypress={()=>navigation.navigate('WelcomeScreen')} />
<AppButton title="Skip " color= "secondary" mypress={()=>navigation.navigate('WelcomeScreen')}  ></AppButton>

{/* <SubmitButton title="Skip" color="#E5E5E5" onPress={() =>navigation.push('AddDetails')}></SubmitButton> */}
</View>
       </>
          )}
</Formik>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#F7C9C9",
    flex:1,
    top:10,

  },
  text:{
    fontSize:35,
    color:"red",
    justifyContent:"center",
    alignSelf:"center",
    top:90
  },
  APP:{
    top:120,
width:"100%",
height:70,



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
  top:580

},
// addtext:{
//   fontSize:15,
//  left:30
// },r
// button:{
//   backgroundColor:colors.buttoncolor
// }

});

export default RegisterScreen;