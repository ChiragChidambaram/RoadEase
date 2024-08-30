import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RAsyncStorage} from '../utils/commonFunctions';
import AuthStack from '../components/AuthStack';
import AppStack from '../components/AppStack';
import {NavigationContainer} from '@react-navigation/native';

const StackDesider = () => {
  const [token, setToken] = useState(null);
  const presentToken = useSelector(state => state.user.token);

  useEffect(() => {
    let tokenData = RAsyncStorage.getItem('token');
    setToken(tokenData || null);
  }, [presentToken]);

  return (
    <>
      <NavigationContainer>
        {token ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};

export default StackDesider;
