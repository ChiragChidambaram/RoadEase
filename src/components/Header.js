import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Header = ({ title }) => {

  return (
    <View style={styles.feedContainer}>
      <View style={styles.feedHeader}>
        <View style={styles.headerLogo}>
          <Image source={require('../public/images/logo.png')} />
          <Text style={styles.heading}>{ title }</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Image source={require('../public/images/Menu.png')} />
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
   feedContainer:{
    flex:1,
    backgroundColor:'#fff'
   }, 
  feedHeader: {
    height: 80,
    display:'flex',
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:"center",
    padding:20,
    backgroundColor:'#fff'
  },
  headerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Archivo-Bold',
    fontSize: 24,
    paddingLeft: 10,
    color: '#112D4E',
  },
});
