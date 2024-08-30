
import React from 'react';

import { AuthStack } from './src/components/NavigationContainer';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  );
}

export default App;