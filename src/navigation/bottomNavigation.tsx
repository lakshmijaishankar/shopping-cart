import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigation;

const Home = () => {
  return <Text>Home</Text>;
};

const Settings = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
};
