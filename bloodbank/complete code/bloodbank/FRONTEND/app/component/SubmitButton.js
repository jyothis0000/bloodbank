import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import { useFormikContext } from "formik"
import AppButton from "./AppButton";
import colors from "./config/colors";
const SubmitButton = ({title,color,onLongPress}) => {
const {handleSubmit}= useFormikContext();
  return (
    <AppButton title={title}  colors={colors}   mypress={handleSubmit}
 onLongPress={onLongPress}
    ></AppButton>
  );
};

export default SubmitButton;
const styles = StyleSheet.create({
 
});