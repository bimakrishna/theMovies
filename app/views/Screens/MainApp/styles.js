import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  footerStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  itemWrap: {backgroundColor: '#dfe3e7', width: '100%', height: 2},
  mainWrap: {paddingHorizontal: width * 0.02, marginTop: width * 0.02},
  safeAreaViewWrap: {marginTop: 10},
  flatlistWrap: {marginBottom: 250},
  renderTopItem: {marginTop: 5},
});
