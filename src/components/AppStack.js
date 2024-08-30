import {createStackNavigator} from '@react-navigation/stack';

import ReportPage from '../view/ReportPage';

//UserFeedScreen
import UserFeedScreen from './UserFeedScreen';

//AuthorityScreen
import AuthorityScreen from './AuthorityScreen';
import IssuePreview from '../view/IssuePreview';
import BackPage from './BackPage';
import ImagePickerComponent from './FileUpload';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

const Stack = createStackNavigator();

const User = () => (
  <Stack.Screen
    name="UserFeedStack"
    component={UserFeedScreen}
    options={{headerShown: false}}
  />
);

const Authority = () => (
  <Stack.Screen
    name="AuthorityStack"
    component={AuthorityScreen}
    options={{headerShown: false}}
  />
);

const AppStack = () => {
  const userData = useSelector(state => state.user.value);
  const token = useSelector(state => state.user.token);
  useEffect(() => {}, [token]);

  return (
    <Stack.Navigator>
      {userData.type === 'user' ? User() : Authority()}

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
