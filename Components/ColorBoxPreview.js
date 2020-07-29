import React from 'react';
import { View, Text } from 'react-native';
import styles from '../App.styles';

const ColorBoxPreview = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };

  return <View style={[styles.previewBox, boxColor]}></View>;
};

export default ColorBoxPreview;
