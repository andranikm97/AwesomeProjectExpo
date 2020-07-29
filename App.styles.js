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
  paletteLink: {
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'blue',
  },
  paletteText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
