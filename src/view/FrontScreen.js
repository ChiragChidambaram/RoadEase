import React, { useEffect, useRef } from 'react';
import {Animated, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FrontScreen =()=> {
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity value: 1
  const navigation = useNavigation();

  useEffect(() => {
    // Start fade out animation after 3 seconds
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0, // Fade to opacity 0
        duration: 1000, // Animation duration
        useNativeDriver: true, // Use native driver for better performance
      }).start(() => {
        // After animation, navigate to NextScreen
        navigation.navigate('CreateAccount');
      });
    }, 3000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      <Image source={require('../public/images/FrontLogo.png')}/>
    </Animated.View>
  );
}


export default FrontScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#fff"
  },
  text: {
    fontSize: 18,
  },
});
