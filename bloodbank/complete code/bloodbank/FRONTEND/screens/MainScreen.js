import React, { useState } from "react";
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../app/component/config/colors";
import Constants from "expo-constants";
const DATA = [
  {
    id: "1",
    image:require('../assets/jacket.jpg'),
    title: "jyothis manoj",
    subtitle:'Group:A+   contact:9497006846'
  },
  {
    id: "2",
    image:require('../assets/images.jpg'),
    title: "Adharsh",
    subtitle:'Group:O+   contact:9994603762'
  },
  {
    id: "3",
    image:require('../assets/Jo.jpg'),
    title: "Ashwand",
    subtitle:'group:B+   contact:9995959264'
  },
  {
    id: "4",
    image:require('../assets/images.jpg'),
    title: "Vaidev",
    subtitle:'group:A+   contact:8848105734'
  },
  
];

const Item = ({ item, onPress, backgroundColor, textColor ,image}) => (
  <TouchableOpacity onPress={() => { console.log("onPress") }} style={[styles.item, backgroundColor]}>
<Image source={item.image} style={styles.image}></Image>

{/* <Image source={require('../assets/couch.jpg')} style={styles.images}></Image> */}
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.subtitle}>{item.subtitle}</Text>
  </TouchableOpacity>
);

const MainScreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? " 	#F0F0F0" : " 	#DCDCDC";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem }
        keyExtractor={(item) => item.id
        }
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 10,
    marginTop: Constants.statusBarHeight,
    backgroundColor:"#F7C9C9",
    top:-30,
    marginBottom:-30,
  },
  item: {
    padding: 50,
    marginVertical: -30,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    textTransform:'uppercase',
    color:'black',
    fontWeight:"100"
  },
  image:{
      height:200,
      width:"100%",
borderTopLeftRadius:15,
borderTopRightRadius:15
  },
  subtitle:{
    fontSize: 16,
    textTransform:'uppercase',
    color:colors.secondary,
fontWeight:"bold"
  },
  images:{
    height:200,
    width:"100%",
borderTopLeftRadius:15,
borderTopRightRadius:15
  }
});

export default MainScreen;