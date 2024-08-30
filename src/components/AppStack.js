import {createStackNavigator} from '@react-navigation/stack';

import FrontScreen from '../view/FrontScreen';
import ReportPage from '../view/ReportPage';

//UserFeedScreen
import UserFeedScreen from './UserFeedScreen';

//AuthorityScreen
import AuthorityScreen from './AuthorityScreen';
import IssuePreview from '../view/IssuePreview';
import BackPage from './BackPage';
import ImagePickerComponent from './FileUpload';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const AppStack = () => {
  const userData = useSelector(state => state.user.value);
  return (
    <Stack.Navigator
      initialRouteName={
        userData?.type === 'user' ? 'UserFeedStack' : 'AuthorityStack'
      }>
      <Stack.Screen
        name="Home"
        component={FrontScreen}
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
      <Stack.Screen
        name="imageUpload"
        component={ImagePickerComponent}
        options={({navigation, route}) => ({
          header: () => <BackPage title="Home" navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
