import styles from './App.styles';
import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ColorBox from './Components/ColorBox.js';
import db from './db';

const App = () => {
  const COLORS = db.colors;
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.androidSafeArea}>
        {/* <Text style={styles.text}>
            Here are some boxes of different colors{' '}
          </Text> */}

        {/* <ColorBox colorName="Cyan" hexCode="#2aa198" />
          <ColorBox colorName="Blue" hexCode="#268bd2" />
          <ColorBox colorName="Magenta" hexCode="#d33682" />
          <ColorBox colorName="Orange" hexCode="#cb4b16" /> */}

        <FlatList
          style={styles.container}
          data={COLORS}
          keyExtractor={(item) => item.colorName}
          renderItem={({ item }) => {
            return (
              <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
            );
          }}
          ListHeaderComponent={
            <Text style={styles.text}>
              Here are some boxes of different colors{' '}
            </Text>
          }
        />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
