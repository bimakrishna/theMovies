import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getMovieById} from '../../../redux/actions/movies';

export default function MovieDetailPage(props) {
  const {navigation} = props;
  const dispatch = useDispatch();
  const item = props?.route?.params?.item?.item;
  const {backdrop_path, name, overview, poster_path} = item;
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  const goback = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getMovieById(item.id))
      .then(res => {
        setLoading(false);
        setMovie(res);
      })
      .catch(err => {
        setLoading(false);
        console.log(err, 'err');
      });
  }, []);

  const RenderSeasons = ({data}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri:
              data?.poster_path === null
                ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEnIvoqFQz-_nzodrgFhq7y6eN4yJoQVZ4g&usqp=CAU'
                : `https://image.tmdb.org/t/p/original${data?.poster_path}`,
          }}
          style={{width: 100, height: 160}}
          resizeMode={'contain'}
        />
        <View style={{padding: 10}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{data?.name}</Text>
          <Text style={{fontSize: 13, fontWeight: 'bold'}}>
            {moment(data?.air_date).format('YYYY')} | {data?.episode_count}{' '}
            Episodes
          </Text>
          <Text>{data?.overview}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`,
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
      <ScrollView
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>{movie?.name}</Text>
        <Text style={{marginTop: 10}}>{movie?.overview}</Text>
        <View style={{marginVertical: 15, marginBottom: 200}}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>Seasons</Text>
          {loading ? (
            <View
              style={{
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text>Loading ... </Text>
            </View>
          ) : (
            movie?.seasons?.map(el => {
              return <RenderSeasons data={el} />;
            })
          )}
        </View>
      </ScrollView>
    </View>
  );
}
