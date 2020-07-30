import styles from './App.styles';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import ColorPalette from './Screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';
import db from './db';

import { Text, FlatList } from 'react-native';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Solarized"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
        <Stack.Screen
          name="Frontend Masters"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
        <Stack.Screen
          name="Rainbow"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
        <Stack.Screen
          name="Giant Goldfish"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
        <Stack.Screen
          name="Thought Provoking"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
        <Stack.Screen
          name="Ocean Five"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
        <Stack.Screen
          name="Compatible"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
        <Stack.Screen
          name="Good Friends"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
        <Stack.Screen
          name="Headache"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
