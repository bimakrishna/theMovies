import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function MovieDetailPage(props) {
  console.log(props, 'props');
  const {navigation} = props;
  const item = props?.route?.params?.item?.item;
  const {backdrop_path, name, overview} = item;

  const goback = () => {
    navigation.goBack();
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
          paddingHorizontal: 10,
          paddingVertical: 15,
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>{name}</Text>
        <Text style={{marginTop: 10}}>{overview}</Text>
      </View>
    </View>
  );
}
