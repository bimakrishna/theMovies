import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  direction: {flexDirection: 'row'},
  imageSize: {width: 100, height: 160},
  seasonsWrap: {padding: 10},
  textSize: {fontSize: 15, fontWeight: 'bold'},
  underTitleSize: {fontSize: 13, fontWeight: 'bold'},
  imageHeader: {width: 500, height: 200},
  buttonHeaderImage: {position: 'absolute', padding: 16},
  textButton: {fontWeight: 'bold', fontSize: 20, color: 'white'},
  scrollViewStyle: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  nameWrap: {fontSize: 30, fontWeight: 'bold'},
  overViewWrap: {marginTop: 10},
  upperSeasonWrap: {marginVertical: 15, marginBottom: 200},
  loadingWrap: {
    alignItems: 'center',
    marginTop: 20,
  },
});
