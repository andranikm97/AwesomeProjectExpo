import styles from './App.styles';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import ColorPalette from './Screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Solarized" component={ColorPalette} />
        <Stack.Screen name="Rainbow" component={ColorPalette} />
        <Stack.Screen name="Frontend" component={ColorPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
