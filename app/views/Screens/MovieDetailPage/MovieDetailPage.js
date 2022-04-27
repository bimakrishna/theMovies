import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

export default function MovieDetailPage(props) {
  const {navigation} = props;
  const item = props?.route?.params?.item?.item;
  const {backdrop_path, name, overview, poster_path} = item;
  console.log(item, 'props');

  const goback = () => {
    navigation.goBack();
  };

  const RenderItem = ({title, value}) => {
    return (
      <View>
        <Text style={{fontWeight: 'bold'}}>{title}</Text>
        <Text>{value}</Text>
      </View>
    );
  };

  return (
    <View>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${backdrop_path}`,
        }}
        style={{width: 500, height: 200}}
      />
      <TouchableOpacity
        style={{position: 'absolute', padding: 16}}
        onPress={goback}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
          x
        </Text>
      </TouchableOpacity>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original${poster_path}`,
            }}
            style={{width: 100, height: 200}}
            resizeMode={'contain'}
          />
          <View style={{paddingTop: 20, paddingLeft: 20, width: '60%'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>{name}</Text>
            <Text style={{marginTop: 10}}>{overview}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 20,
            padding: 20,
            backgroundColor: 'red',
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            borderRadius: 10,
            elevation: 5,
          }}>
          <RenderItem
            title={'Language'}
            value={item?.original_language.toUpperCase()}
          />
          <RenderItem title={'Vote'} value={item?.vote_average} />
          <RenderItem title={'Country'} value={item?.origin_country[0]} />
        </View>
      </View>
    </View>
  );
}
