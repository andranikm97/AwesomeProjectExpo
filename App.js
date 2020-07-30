import styles from './App.styles';
import React, { useEffect, useCallback, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import ColorPalette from './Screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';
import ApiClient from './Services/ApiService';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from 'react-native';
const Stack = createStackNavigator();

const App = () => {
  const [colors, setColors] = useState([]);

  const handleInitial = useCallback(async () => {
    const resp = await ApiClient.getColors();
    if (resp) {
      setColors(resp);
    }
  }, []);

  useEffect(() => {
    handleInitial();
  }, []);

  return (
    <NavigationContainer>
      <FlatList
        style={styles.container}
        data={colors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Text>Palette {item.paletteName}</Text>;
        }}
      />
    </NavigationContainer>
  );
};

export default App;
