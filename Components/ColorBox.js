import React from 'react';
import { View, Text } from 'react-native';
import styles from '../App.styles';
import hexRgb from 'hex-rgb';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };

  const reserveTextColor = {
    color: 'black',
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text
        style={[checkVisibility(hexCode) ? reserveTextColor : styles.boxText]}
      >
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

function checkVisibility(hexCode) {
  const rgb = hexRgb(hexCode.split('#')[1]);

  for (let color in rgb) {
    color = rgb[color];
    if (color > 230) {
      return true;
    }
  }
  return false;
}

export default ColorBox;
