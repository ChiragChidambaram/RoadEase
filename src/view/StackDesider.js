import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RAsyncStorage} from '../utils/commonFunctions';
import AuthStack from '../components/AuthStack';
import AppStack from '../components/AppStack';

const StackDesider = () => {
  const [token, setToken] = useState(null);
  const presentToken = useSelector(state => state.user.token);

  useEffect(() => {
    let tokenData = RAsyncStorage.getItem('token');
    setToken(tokenData);
  }, [presentToken]);

  return <>{token ? <AppStack /> : <AuthStack />}</>;
};

export default StackDesider;
