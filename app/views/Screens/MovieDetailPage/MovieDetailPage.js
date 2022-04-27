import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getMovieById} from '../../../redux/actions/movies';
import {styles} from './styles';

export default function MovieDetailPage(props) {
  const {navigation} = props;
  const dispatch = useDispatch();
  const item = props?.route?.params?.item?.item;
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
      <View style={styles.direction}>
        <Image
          source={{
            uri:
              data?.poster_path === null
                ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEnIvoqFQz-_nzodrgFhq7y6eN4yJoQVZ4g&usqp=CAU'
                : `https://image.tmdb.org/t/p/original${data?.poster_path}`,
          }}
          style={styles.imageSize}
          resizeMode={'contain'}
        />
        <View style={styles.seasonsWrap}>
          <Text style={styles.textSize}>{data?.name}</Text>
          <Text style={styles.underTitleSize}>
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
        style={styles.imageHeader}
      />
      <TouchableOpacity style={styles.buttonHeaderImage} onPress={goback}>
        <Text style={styles.textButton}>x</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollViewStyle}>
        <Text style={styles.nameWrap}>{movie?.name}</Text>
        <Text style={styles.overViewWrap}>{movie?.overview}</Text>
        <View style={styles.upperSeasonWrap}>
          <Text style={styles.textSize}>Seasons</Text>
          {loading ? (
            <View style={styles.loadingWrap}>
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
