import {View, Text, Dimensions} from 'react-native';
import React from 'react';

export default function Header({title}) {
  const {width, height} = Dimensions.get('window');
  return (
    <View
      style={{
        paddingTop: 0,
        alignItems: 'center',
        paddingTop: width * 0.13,
      }}>
      <Text style={{fontWeight: 'bold'}}>{title}</Text>
    </View>
  );
}
