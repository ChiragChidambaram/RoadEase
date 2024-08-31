import React, {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import off from '../../assets/images/power-switch.png';
import plus from '../../assets/images/plus.png';
import {useDispatch} from 'react-redux';
import {clearUser} from '../redux/user/userSlice';
import {RAsyncStorage} from '../utils/commonFunctions';
import ModalPage from './Modal';

const Header = ({title}) => {
  const [modalOpen, setModalOpen] = useState();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearUser());
    RAsyncStorage.clearAll();
  };
  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <View style={styles.feedContainer}>
      <View style={styles.feedHeader}>
        <View style={styles.headerLogo}>
          <Image source={require('../public/images/logo.png')} />
          <Text style={styles.heading}>{title}</Text>
        </View>
        <View style={styles.headerLogo2}>
          <TouchableOpacity onPress={() => openModal()} style={styles.button}>
            <Image style={{width: 20, height: 20}} source={plus} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleLogout()}
            style={styles.button}>
            <Image style={{width: 30, height: 30}} source={off} />
          </TouchableOpacity>
        </View>
      </View>
      <ModalPage modalVisible={modalOpen} setModalVisible={setModalOpen} />
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
