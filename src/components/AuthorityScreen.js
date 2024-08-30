import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, StyleSheet } from 'react-native';

import Header from './Header';
import FeedPage from '../view/FeedPage';

const Tab = createBottomTabNavigator();

const TabIcon = ({ focused, title, icon }) => {
  return (
    <View style={styles.tabIconContainer}>
      <Image
        source={icon}
        style={[styles.tabIcon, { tintColor: focused ? '#fff' : '#333' }]}
      />
      <Text style={[styles.tabText, { color: focused ? '#fff' : '#333' }]}>
        {title}
      </Text>
    </View>
  );
};

export default function AuthorityScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Issues"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#f8f9fa',
          borderTopColor: '#e0e0e0',
          height: 65,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          paddingTop:5,
          marginBottom: 0, // Adjust margin for vertical alignment
          flex: 1,
        },
        tabBarActiveBackgroundColor: '#112D4E',
        tabBarInactiveBackgroundColor: "#D9D9D9",
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#333',
        tabBarIcon: ({ focused }) => {
          let icon;
          let title;

          switch (route.name) {
            case 'Issues':
              icon = require('../public/images/home.png'); // Replace with your icon path
              break;
            case 'Insights':
              icon = require('../public/images/insights.png'); // Replace with your icon path
              break;
            case 'Map':
              icon = require('../public/images/broadcast.png'); // Replace with your icon path
              break;
            default:
              icon = null;
              title = '';
          }

          return <TabIcon focused={focused} title={title} icon={icon} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={FeedPage}
        options={({ navigation }) => ({
          header: () => <Header title="Issues" navigation={navigation} />,
        })}
      />

      <Tab.Screen
        name="Insights"
        component={FeedPage}
        options={({ navigation }) => ({
          header: () => <Header title="Insights" navigation={navigation} />,
        })}
      />

      <Tab.Screen
        name="Map"
        component={FeedPage}
        options={({ navigation }) => ({
          header: () => <Header title="Map" navigation={navigation} />,
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:5
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginTop:10
  },
  tabText: {
    fontSize: 12,
    fontWeight: 'bold',
    display:'none',
  },
});
