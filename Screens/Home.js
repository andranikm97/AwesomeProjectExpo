import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import ApiClient from '../Services/ApiService';
import styles from '../App.styles';
import PalettePreview from '../Components/PalettePreview';

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([]);

  const fetchColorPalettes = useCallback(async () => {
    const results = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (results.ok) {
      const palettes = await results.json();
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={colorPalettes}
        keyExtractor={(colorPalettes) => `${colorPalettes.id}`}
        renderItem={({ item }) => {
          const { paletteName, colors } = item;
          return (
            <TouchableOpacity
              style={styles.paletteLink}
              onPress={() => {
                navigation.navigate(paletteName, {
                  paletteName: paletteName,
                  colors: colors,
                });
              }}
            >
              <Text style={styles.paletteText}> {paletteName} </Text>
              <PalettePreview
                style={styles.container}
                colors={colors.slice(0, 5)}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;
