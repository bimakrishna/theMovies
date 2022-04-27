import {View, Text, Dimensions, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header, TextInput, CardItem} from '../../Components';
import {useDispatch, useSelector} from 'react-redux';
import {getMovie} from '../../../redux/actions/movies';

const ListFooterComponent = () => (
  <Text
    style={{
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 5,
    }}>
    Loading...
  </Text>
);

let stopFetchMore = true;

export default function MainApp(props) {
  const dispatch = useDispatch();
  const {navigation} = props;
  const {width, height} = Dimensions.get('window');
  const [isLoading, setLoading] = useState(false);
  const [count, setCount] = useState(1);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovie(count);
  }, []);

  const fetchMovie = id => {
    setLoading(true);
    dispatch(getMovie(id))
      .then(res => {
        setTimeout(() => {
          setLoading(false);
          setCount(count + 1);
          setMovies([...movies, ...res]);
        }, 3000);
      })
      .catch(err => {
        console.log(err, 'err');
      });
  };

  useEffect(() => {
    console.log(movies, 'movies');
  }, [movies]);
  const renderItem = item => {
    return (
      <View style={{marginTop: 5}} key={item.id}>
        <CardItem
          onPress={() => toDetail(item)}
          poster={item?.item?.poster_path}
          rating={item?.item?.vote_average}
          title={item?.item?.name}
          date={item?.item?.first_air_date}
        />
        <View style={{backgroundColor: '#dfe3e7', width: '100%', height: 2}} />
      </View>
    );
  };

  const toDetail = item => {
    navigation.navigate('MovieDetailPage', {item: item});
  };

  const handleOnEndReached = () => {
    console.log('coba ya');
  };

  return (
    <View>
      <Header title={'TV Show'} />
      <View style={{paddingHorizontal: width * 0.02, marginTop: width * 0.02}}>
        <TextInput placeholder={'Search TV Show'} />
        <SafeAreaView style={{marginTop: 10}}>
          <FlatList
            style={{marginBottom: 280}}
            data={movies}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            onEndReachedThreshold={0.5}
            onScrollBeginDrag={() => {
              stopFetchMore = false;
            }}
            onEndReached={fetchMovie}
            ListFooterComponent={() => isLoading && <ListFooterComponent />}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}
