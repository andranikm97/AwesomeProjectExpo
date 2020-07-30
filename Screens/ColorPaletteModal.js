import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
  Switch,
} from 'react-native';
import db from '../db';

const ColorPaletteModal = ({ navigation }) => {
  const [paletteName, setPaletteName] = useState('');
  const [newPaletteColors, setNewPaletteColors] = useState([]);

  const handleSubmit = useCallback(() => {
    if (!paletteName) {
      alert('Please enter a palette name');
      Alert.alert('Please enter a palette name');
    } else if (newPaletteColors.length < 3) {
      alert('Please choose at least 3 colors');
      Alert.alert('Please choose at least 3 colors');
    } else {
      const newColorPalette = {
        paletteName,
        colors: newPaletteColors,
      };
      navigation.navigate('Home', {
        newColorPalette,
      });
    }
  }, [paletteName, newPaletteColors]);

  const handleValueChange = useCallback((value, color) => {
    if (value) {
      setNewPaletteColors((current) => [...current, color]);
    } else {
      setNewPaletteColors((current) =>
        current.filter(
          (selectedColor) => color.colorName !== selectedColor.colorName,
        ),
      );
    }
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={paletteName}
        onChangeText={setPaletteName}
        placeholder={'Enter new palette name'}
      />
      <FlatList
        data={db}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => {
          return (
            <View style={styles.color}>
              <Text>{item.colorName}</Text>
              <Switch
                value={
                  !!newPaletteColors.find(
                    (color) => color.name === item.colorName,
                  )
                }
                onValueChange={(selected) => {
                  handleValueChange(selected, item);
                }}
              />
            </View>
          );
        }}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text> Submit </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  input: {
    marginVertical: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
  },
  color: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});

export default ColorPaletteModal;
