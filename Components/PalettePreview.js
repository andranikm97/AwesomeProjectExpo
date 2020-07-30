import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ColorBoxPreview from './ColorBoxPreview';

const PalettePreview = ({ colors }) => {
  return (
    <FlatList
      style={styles.container}
      horizontal={true}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => {
        return <ColorBoxPreview hexCode={item.hexCode} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 3,
  },
});

export default PalettePreview;
