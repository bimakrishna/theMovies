import {View, Text, TextInput as InputT, Dimensions} from 'react-native';
import React from 'react';
import {componentStyles} from './componentStyles';

export default function TextInput({...props}) {
  return (
    <View>
      <InputT {...props} style={componentStyles.textInputWrap} />
    </View>
  );
}
