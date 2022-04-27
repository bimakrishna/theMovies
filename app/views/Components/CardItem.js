import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CardItem({poster, rating, title, date, onPress}) {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', marginBottom: 10}}
      onPress={onPress}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${poster}`,
        }}
        style={{width: 100, height: 100}}
        resizeMode="contain"
      />
      <View
        style={{
          width: '60%',
          justifyContent: 'space-between',
        }}>
        <Text>{title}</Text>
        <Text>{date}</Text>
      </View>
      <View>
        <Text>{rating}</Text>
      </View>
    </TouchableOpacity>
  );
}
