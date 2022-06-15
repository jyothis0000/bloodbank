import React from 'react';
import { View, StyleSheet,Button} from 'react-native';
import AppText from '../app/component/Apptext';
import AppTextInput from '../app/component/AppTextinput';
import Slide from '../app/component/Data/Slide';
import colors from '../app/component/config/colors';
import AppButton from '../app/component/AppButton';

function AddDetails({navigation}) {
  return (
      
    <View style={styles.container}>
        <AppText> Full name </AppText> 
<AppTextInput placeholder="Add name">
    

</AppTextInput>
<AppText> Contact Number</AppText> 
<AppTextInput placeholder="Add number ">

</AppTextInput>
<AppText>Blood group </AppText> 
<AppTextInput placeholder="Add group " />

{/* <AppText>ACTIVITIES </AppText> 
<AppTextInput placeholder="Add education(eg: PLACEMENT, SPORTS) " /> */}
{/* <View style={styles.extra}>
<AppText style={styles.create}>City</AppText> 
<AppTextInput keyboardType="numeric" />
<AppText style={styles.create}>Pincode</AppText> 
<AppTextInput keyboardType="numeric" />
</View> */}
<AppText>City </AppText> 
<AppTextInput placeholder="Add city" />
<AppText>Pincode </AppText> 
<AppTextInput placeholder="Add pincode " />

<AppText>Type</AppText> 
<AppTextInput placeholder="Add type(eg: hospital,blood bank,client)" />
<Slide name="chevron-right" size={20} color="black" ></Slide>
         
                  
<AppButton title="sumbit"   Mycolor="buttoncolor" mypress={()=>navigation.navigate('MainScreen')} />


{/* <SubmitButton title="Skip" color="#E5E5E5" onPress={() =>navigation.push('AddDetails')}></SubmitButton> */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#F7C9C9",
    flex:1,
    padding:40,
  },
  extra:{
   

    flexDirection:"row",
      height:40,
      width:"50%"
},
extras:{
    flexDirection:"row",

    height:40,
    width:"40%"
},
create:{
paddingBottom:10,
marginBottom:10,

}
});

export default AddDetails;