import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from './config/colors';
//import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,

  },
  emailColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  emailIcon: {
    color: 'gray',
    fontSize: 30,
  },
  emailNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  emailNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  emailRow: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  emailText: {
    fontSize: 16,
    textTransform:"uppercase"

  },
  iconRow: {
 
    justifyContent: 'center',
    backgroundColor:colors.primary,
 
    height:40,
    width:40
    ,
    borderRadius:20
    
  },
})

const Email = ({ containerStyle, name, email, index }) => (
  <TouchableOpacity>
    <View style={[styles.container, containerStyle]}>
      <View style={styles.iconRow}>
       
          <Icon
            name="email"
            
            size={30}
            color='black'
            iconStyle={styles.emailIcon}
           
          />
       
      </View>
      <View style={styles.emailRow}>
        <View style={styles.emailColumn}>
          <Text style={styles.emailText}>MY messages</Text>
        </View>
        <View style={styles.emailNameColumn}>
          {
            <Text style={styles.emailNameText}>{name}</Text>
          }
        </View>
      </View>
    </View>
  </TouchableOpacity>
)





export default Email