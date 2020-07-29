import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import styles from '../App.styles';
import db from '../db';
import ColorBox from '../Components/ColorBox';

const ColorPallette = () => {
  const COLORS = db.colors;
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <FlatList
        style={styles.container}
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => {
          return <ColorBox colorName={item.colorName} hexCode={item.hexCode} />;
        }}
        ListHeaderComponent={
          <Text style={styles.text}>
            Here are some boxes of different colors{' '}
          </Text>
        }
      />
    </SafeAreaView>
  );
};

export default ColorPallette;
