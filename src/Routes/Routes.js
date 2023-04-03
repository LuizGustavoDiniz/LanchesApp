import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer'

import MenuLanches from '../pages/MenuLanches'
import Home from '../pages/Home';
import Product from '../pages/Product';

function Root() {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="menulanches" component={MenuLanches} />
    </Drawer.Navigator>
  );
}

function Routes() {

  const Stack = createNativeStackNavigator();

 return (
  <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Root' component={Root} options={{headerShown: false}}/>
        <Stack.Screen name='product' component={Product}/>
        <Stack.Screen name="menulanches" component={MenuLanches} />
      </Stack.Navigator>
 </NavigationContainer>
  );
}

export default Routes;




