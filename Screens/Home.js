import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import db from '../db';
import styles from '../App.styles';
import { FlatList } from 'react-native-gesture-handler';
import PalettePreview from '../Components/PalettePreview';

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
        <Text style={styles.paletteText}> Solarized </Text>
        <PalettePreview
          style={styles.container}
          colors={db.solarized.slice(0, 5)}
        />
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
        <Text style={styles.paletteText}> Rainbow </Text>
        <PalettePreview
          style={styles.container}
          colors={db.rainbow.slice(0, 5)}
        />
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
        <Text style={styles.paletteText}> Front-End </Text>
        <PalettePreview
          style={styles.container}
          colors={db.frontend_masters.slice(0, 5)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
