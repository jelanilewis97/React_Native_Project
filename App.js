import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, FlatList, TextInput, StyleSheet, Text, View } from 'react-native';
import {Feed} from './Feed'
import {styles} from './styles'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator()
const client_id = 'ba15c66b1d794aaea65e0dd13d57b465'; // Your client id
const client_secret = '4370c3eb6f594096bc278cde0424ac7c'; // Your secret
const redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

function MyTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="Home" component={Feed} />
      <Tabs.Screen name="Settings" component={Feed} />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
        <Tabs.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
          <Tabs.Screen style={styles.container} name="Home" component={Feed}/>
          <Tabs.Screen name="Settings" component={Feed}/>
        </Tabs.Navigator>
      </NavigationContainer>
  );
}