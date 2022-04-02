/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
  TextInput,
  FlatList,
} from 'react-native';
import {useState} from 'react/cjs/react.development';
import Home from './components/home';
import Drawer from './components/drawer';

const App = () => {
  const [text, setText] = useState();
  const data = [{title: 1}, {title: 2}, {title: 3}];

  return (
    <>
      <Drawer text="Hello" />
      <Home />
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
