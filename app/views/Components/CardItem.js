import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import moment from 'moment';
import {componentStyles} from './componentStyles';

export default function CardItem({poster, rating, title, date, onPress}) {
  return (
    <Pressable style={componentStyles.buttonWrap} onPress={onPress}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${poster}`,
        }}
        style={componentStyles.imageButtonWrap}
        resizeMode="contain"
      />
      <View style={componentStyles.cardTitleWrap}>
        <Text style={{fontWeight: 'bold'}}>{title}</Text>
        <Text>{moment(date).format('MMM DD, YYYY')}</Text>
      </View>
      <View>
        <Text style={componentStyles.ratingWrap}>{rating}</Text>
      </View>
    </Pressable>
  );
}
