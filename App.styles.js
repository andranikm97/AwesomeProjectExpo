import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  androidSafeArea: {
    // paddingTop: Platform.OS === 'android' ? 35 : 0,
    flex: 1,
  },
  pinkBack: {
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginTop: 20,
  },
  boxText: {
    color: 'white',
  },
  box: {
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewBox: {
    borderRadius: 5,
    marginRight: 5,
    width: 60,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 2,
  },
  paletteLink: {
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  paletteText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
