import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import styles from '../App.styles';
import db from '../db';
import ColorBox from '../Components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors } = route.params;

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <FlatList
        style={styles.container}
        data={colors}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => {
          return <ColorBox colorName={item.colorName} hexCode={item.hexCode} />;
        }}
      />
    </SafeAreaView>
  );
};

export default ColorPalette;
