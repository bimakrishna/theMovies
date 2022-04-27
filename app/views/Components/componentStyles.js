import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const componentStyles = StyleSheet.create({
  buttonWrap: {flexDirection: 'row', marginBottom: 10},
  imageButtonWrap: {width: 100, height: 100},
  cardTitleWrap: {
    width: '60%',
    justifyContent: 'space-between',
  },
  ratingWrap: {
    backgroundColor: '#81bb63',
    padding: 10,
    borderRadius: 10,
    fontWeight: 'bold',
    color: 'white',
    width: 40,
    height: 40,
    alignItems: 'center',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 7,
  },
  textInputWrap: {
    backgroundColor: '#dfe3e7',
    paddingVertical: width * 0.02,
    borderRadius: 10,
    paddingHorizontal: width * 0.02,
    textAlign: 'center',
  },
});
