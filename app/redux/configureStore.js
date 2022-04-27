import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import placeReducer from './reducers/index';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  places: placeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
