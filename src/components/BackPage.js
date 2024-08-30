import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const BackPage = ({ title }) => {

    const navigate = useNavigation();

  return (
    <View style={styles.feedContainer}>
      <View style={styles.feedHeader}>
        <View style={styles.headerLogo}>
            <TouchableOpacity onPress={()=>navigate.navigate(`${title}`)}>
          <Image source={require('../public/images/backArrow.png')} />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BackPage;

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
