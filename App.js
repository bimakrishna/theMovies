/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './app/redux/configureStore';
import App from './app/views';

const store = configureStore();

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
