import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer, DrawerItem, Layout, Text, IndexPath } from '@ui-kitten/components';
import { Settings } from '../screens/Settings';
import {Play} from '../screens/Play';
import {Contact} from '../screens/Contact';

const { Navigator, Screen } = createDrawerNavigator();

  const DrawerContent = ({ navigation, state }) => (
    <Drawer
      selectedIndex={new IndexPath(state.index)}
      onSelect={index => navigation.navigate(state.routeNames[index.row])}>
      <DrawerItem title='Home' />
      <DrawerItem title='Details' />
      <DrawerItem title='Settings' />
    </Drawer>
  );

  export const DrawerNavigator = () => (
    <Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Screen name='Home' component={HomeScreen}/>
      <Screen name='Details' component={DetailsScreen}/>
      <Screen name="Settings" component={Settings} />
      <Screen name="Play" component={Play}/>
      <Screen name="Contact" component={Contact}/>
    </Navigator>
  );

export const AppNavigator = () => (
  <NavigationContainer>
     <DrawerNavigator/>
  </NavigationContainer>
);