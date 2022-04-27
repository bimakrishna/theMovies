import {View, Text, TextInput as InputT, Dimensions} from 'react-native';
import React from 'react';

export default function TextInput({...props}) {
  const {width, height} = Dimensions.get('window');
  return (
    <View>
      <InputT
        {...props}
        style={{
          backgroundColor: '#dfe3e7',
          paddingVertical: width * 0.02,
          borderRadius: 10,
          paddingHorizontal: width * 0.02,
          textAlign: 'center',
        }}
      />
    </View>
  );
}
