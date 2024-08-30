import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import off from '../../assets/images/power-switch.png';
import {useDispatch} from 'react-redux';
import {clearUser} from '../redux/user/userSlice';

const Header = ({title}) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log('HI');
    dispatch(clearUser());
  };

  return (
    <View style={styles.feedContainer}>
      <View style={styles.feedHeader}>
        <View style={styles.headerLogo}>
          <Image source={require('../public/images/logo.png')} />
          <Text style={styles.heading}>{title}</Text>
        </View>
        <View style={styles.headerLogo2}>
          <TouchableOpacity
            onPress={() => handleLogout()}
            style={styles.button}>
            <Image style={{width: 30, height: 30}} source={off} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../public/images/Menu.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  feedHeader: {
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  headerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogo2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  heading: {
    fontFamily: 'Archivo-Bold',
    fontSize: 24,
    paddingLeft: 10,
    color: '#112D4E',
  },
});
