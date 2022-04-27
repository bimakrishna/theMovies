import React from 'react';
import {Dimensions, Platform, Text, View} from 'react-native';

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
