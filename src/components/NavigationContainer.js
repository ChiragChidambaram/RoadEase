import { createStackNavigator } from '@react-navigation/stack';

import CreateAccount from '../view/CreateAccount';
import FrontScreen from '../view/FrontScreen';
import Login from '../view/login';
import CustomCard from './Card';
import ReportPage from '../view/ReportPage';

const Stack = createStackNavigator();

export const AuthStack =()=>{

  return(
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={FrontScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="CreateAccount" component={CreateAccount}  options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name="Card" component={CustomCard}  options={{ headerShown: false }}/>
        <Stack.Screen name="ReportScreen" component={ReportPage}  options={{ headerShown: false }}/>
      </Stack.Navigator>
  )
}