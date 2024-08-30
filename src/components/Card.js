import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { Card } from 'react-native-elements';

const CustomCard = () => {
  return (
    <Card containerStyle={styles.mainCard}>
      <View style={styles.cardTitleContainer}>
        <Image source={require('../public/images/metro.png')} style={styles.cardTitleImage} />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Bangalore Traffic Police</Text>
          <Text style={styles.cardSubTitle}>Just now</Text>
        </View>
      </View>
      <Text style={styles.cardDescription}>
        The idea with React Native Elements is more about component structure than actual design.
      </Text>
      <Image source={require('../public/images/CardImage.png')} style={styles.cardImage} />
      
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.footerButtons}>
          <Image source={require('../public/images/like.png')} style={styles.footerImage} />
          <Text>123</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.footerButtons]}>
          <Image source={require('../public/images/disLike.png')} style={[styles.footerImage,{marginTop:4}]} />
          <Text>123</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  mainCard: {
    borderRadius:5,
    padding:0,
    borderColor:"none",
    borderWidth:0
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:10
  },
  textContainer: {
    marginLeft: 10,
  },
  cardTitleImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  cardImage: {
    width: '100%',
    height: 400,
    marginVertical: 10,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily:'Archivo-Bold',
    color: "#112D4E",
  },
  cardSubTitle: {
    fontSize: 12,
    color: "#3F72AF",
    fontFamily:'Archivo-Regular'
  },
  cardFooter: {
    flexDirection: 'row'
  },
  footerButtons: {
    padding: 10,
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"center"
  },
  footerImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  cardDescription:{
    fontFamily:'Archivo-Regular',
    padding:10
  }
});
