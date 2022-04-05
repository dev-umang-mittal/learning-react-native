import {Text, View, Naviga} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import Counter from './components/Counter';
import Todo from './components/Todo';
import Login from './components/login';
import SignUp from './components/Signup';
import store from './redux/store';
import {Provider} from 'react-redux';

const stack = createNativeStackNavigator();

export default class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <stack.Navigator initialRouteName="Home">
            <stack.Screen name="Home" component={Home} />
            <stack.Screen name="Counter" component={Counter} />
            <stack.Screen name="Todo" component={Todo} />
            <stack.Screen name="Login" component={Login} />
            <stack.Screen name="Signup" component={SignUp} />
          </stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
}
