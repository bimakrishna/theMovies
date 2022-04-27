import {View, Text, Dimensions, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header, TextInput, CardItem} from '../../Components';
import {useDispatch, useSelector} from 'react-redux';
import {getMovie} from '../../../redux/actions/movies';

export default function MainApp(props) {
  const dispatch = useDispatch();
  const {navigation} = props;
  const {width, height} = Dimensions.get('window');

  const [movies, setMovies] = useState([]);

  const renderItem = item => {
    return (
      <>
        <CardItem
          onPress={() => toDetail(item)}
          key={item.index}
          poster={item?.item?.poster_path}
          rating={item?.item?.vote_average}
          title={item?.item?.name}
          date={item?.item?.first_air_date}
        />
        <View
          style={{backgroundColor: '#dfe3e7', width: '100%', height: '1%'}}
        />
      </>
    );
  };

  useEffect(() => {
    dispatch(getMovie(1)).then(res => {
      setMovies(res);
    });
  }, []);

  const toDetail = item => {
    navigation.navigate('MovieDetailPage', {item: item});
  };

  return (
    <View>
      <Header title={'TV Show'} />
      <View style={{paddingHorizontal: width * 0.02, marginTop: width * 0.02}}>
        <TextInput placeholder={'Search TV Show'} />
        <SafeAreaView style={{marginTop: width * 0.03}}>
          <FlatList
            data={movies}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}
