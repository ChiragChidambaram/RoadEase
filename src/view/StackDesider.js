import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RAsyncStorage} from '../utils/commonFunctions';
import AuthStack from '../components/AuthStack';
import AppStack from '../components/AppStack';
import {NavigationContainer} from '@react-navigation/native';
import {addUser, setToken} from '../redux/user/userSlice';

const StackDesider = () => {
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();

  const updateToken = async () => {
    let token = (await RAsyncStorage.getItem('token')) || '';
    let userData = (await RAsyncStorage.getItem('userData')) || {};
    dispatch(setToken(token));
    dispatch(addUser(userData));
  };

  useEffect(() => {
    updateToken();
  }, []);

  return (
    <>
      <NavigationContainer>
        {token ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};

export default StackDesider;
