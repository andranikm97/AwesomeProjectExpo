import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import db from '../db';
import styles from '../App.styles';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.paletteLink}
        onPress={() => {
          navigation.navigate('Solarized', {
            paletteName: 'Solarized',
            colors: db.solarized,
          });
        }}
      >
        <Text style={styles.boxText}> Solarized </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paletteLink}
        onPress={() => {
          navigation.navigate('Rainbow', {
            paletteName: 'Rainbow',
            colors: db.rainbow,
          });
        }}
      >
        <Text style={styles.boxText}> Rainbow </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paletteLink}
        onPress={() => {
          navigation.navigate('Frontend', {
            paletteName: 'Front-End Masters',
            colors: db.frontend_masters,
          });
        }}
      >
        <Text style={styles.boxText}> Front-End </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
