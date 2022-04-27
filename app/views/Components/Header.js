import {View, Text, Dimensions, Platform} from 'react-native';
import React from 'react';

export default function Header({title}) {
  const {width, height} = Dimensions.get('window');
  return (
    <View
      style={{
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? width * 0.13 : width * 0.08,
      }}>
      <Text style={{fontWeight: 'bold'}}>{title}</Text>
    </View>
  );
}
