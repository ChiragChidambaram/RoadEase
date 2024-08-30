import {createStackNavigator} from '@react-navigation/stack';

import CreateAccount from '../view/CreateAccount';
import FrontScreen from '../view/FrontScreen';
import Login from '../view/login';
import ReportPage from '../view/ReportPage';

//UserFeedScreen
import UserFeedScreen from './UserFeedScreen';

//AuthorityScreen
import AuthorityScreen from './AuthorityScreen';
import IssuePreview from '../view/IssuePreview';
import BackPage from './BackPage';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={FrontScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReportScreen"
        component={ReportPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserFeedStack"
        component={UserFeedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthorityStack"
        component={AuthorityScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Insights"
        component={Insights}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="IssuePreview"
        component={IssuePreview}
        options={({navigation, route}) => ({
          header: () => <BackPage title="Home" navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
