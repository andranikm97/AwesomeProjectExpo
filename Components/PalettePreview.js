import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../App.styles';
import ColorBoxPreview from './ColorBoxPreview';

const PalettePreview = ({ colors }) => {
  return (
    <FlatList
      style={{ marginTop: 15, padding: 3 }}
      horizontal={true}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => {
        return <ColorBoxPreview hexCode={item.hexCode} />;
      }}
    />
  );
};

export default PalettePreview;
