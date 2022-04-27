import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import moment from 'moment';

export default function CardItem({poster, rating, title, date, onPress}) {
  return (
    <Pressable
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
        <Text style={{fontWeight: 'bold'}}>{title}</Text>
        <Text>{moment(date).format('MMM DD, YYYY')}</Text>
      </View>
      <View>
        <Text
          style={{
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
          }}>
          {rating}
        </Text>
      </View>
    </Pressable>
  );
}
