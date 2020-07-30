import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import ApiClient from '../Services/ApiService';
import styles from '../App.styles';
import PalettePreview from '../Components/PalettePreview';

const Home = ({ navigation, route }) => {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = useCallback(async () => {
    const results = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (results.ok) {
      const palettes = await results.json();
      setColorPalettes(palettes);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes((current) => [newColorPalette, ...current]);
    }
  }, [newColorPalette]);

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
                navigation.navigate('ColorPalette', {
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
        refreshing={isRefreshing}
        onRefresh={() => {
          handleRefresh();
        }}
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ColorPaletteModal');
            }}
          >
            <Text> Launch Modal </Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default Home;
