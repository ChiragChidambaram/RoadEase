import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import Toast from 'react-native-toast-message';

import {NavigationContainer} from '@react-navigation/native';
import StackDesider from './src/view/StackDesider';

function App() {
  return (
    <Provider store={store}>
      <StackDesider />
      <Toast />
    </Provider>
  );
}

export default App;
