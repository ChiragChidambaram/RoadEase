import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Header from './Header';
import FeedPage from '../view/FeedPage';
import Insights from '../view/Insights';
import ReportPage from '../view/ReportPage';

const Tab = createBottomTabNavigator();

export default function UserFeedScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#f8f9fa', // Custom background color for the tab bar
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          height: 60, // Adjust the height of the tab bar
        },
        tabBarLabelStyle: {
          fontSize: 16, // Custom font size for tab labels
          fontWeight: 'bold', // Custom font weight for tab labels
          textAlign: 'center', // Center the text horizontally
          alignSelf: 'center', // Center the text vertically
          justifyContent: 'center',
          marginBottom: 20, // Remove margin to center the text vertically
          flex: 1, // Take up full space
        },
        tabBarActiveBackgroundColor: '#112D4E', // Background color for the active tab
        tabBarInactiveBackgroundColor: '#D9D9D9', // Background color for inactive tabs
        tabBarActiveTintColor: '#fff', // Text color for the active tab
        tabBarInactiveTintColor: '#333', // Text color for inactive tabs
        tabBarIcon: () => null, // Remove the icon
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedPage}
        options={({navigation}) => ({
          header: () => <Header title="Feed" navigation={navigation} />,
        })}
      />

      <Tab.Screen
        name="MyReports"
        component={ReportPage}
        options={({navigation}) => ({
          header: () => <Header title="My Reports" navigation={navigation} />,
        })}
      />
    </Tab.Navigator>
  );
}
