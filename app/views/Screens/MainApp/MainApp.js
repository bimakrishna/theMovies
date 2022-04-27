import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getMovie} from '../../../redux/actions/movies';
import {CardItem, Header, TextInput} from '../../Components';
import {styles} from './styles';

const ListFooterComponent = () => (
  <Text style={styles.footerStyle}>Loading...</Text>
);

let stopFetchMore = true;

export default function MainApp(props) {
  const dispatch = useDispatch();
  const {navigation} = props;
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

  const renderItem = item => {
    return (
      <View style={styles.renderTopItem} key={item.id}>
        <CardItem
          onPress={() => toDetail(item)}
          poster={item?.item?.poster_path}
          rating={item?.item?.vote_average}
          title={item?.item?.name}
          date={item?.item?.first_air_date}
          data={item?.item}
        />
        <View style={styles.itemWrap} />
      </View>
    );
  };

  const toDetail = item => {
    navigation.navigate('MovieDetailPage', {item: item});
  };

  return (
    <View>
      <Header title={'TV Show'} />
      <View style={styles.mainWrap}>
        <TextInput placeholder={'Search TV Show'} />
        <SafeAreaView style={styles.safeAreaViewWrap}>
          <FlatList
            style={styles.flatlistWrap}
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
