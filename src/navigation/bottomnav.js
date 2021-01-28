import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Profile from '../routers/screens/Profile';
import HomeScreen from '../routers/screens/HomeScreen';
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator barStyle={{backgroundColor: '#ffff'}}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarOptions: {
            style: {
              backgroundColor: 'white',
            },
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarOptions: {
            style: {
              backgroundColor: 'white',
            },
          },
        }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

export default MyTabs;
