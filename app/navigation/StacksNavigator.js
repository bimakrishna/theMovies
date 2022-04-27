import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainApp} from '../views/Screens';
import {MovieDetailPage} from '../views/Screens';

const Stack = createNativeStackNavigator({
  MainApp: {screen: MainApp},
  MovieDetailPage: {screen: MovieDetailPage},
});

export default Stack;
