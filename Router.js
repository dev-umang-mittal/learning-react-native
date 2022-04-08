import {StatusBar} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import Counter from './components/Counter';
import Todo from './components/Todo';
import Login from './components/login';
import SignUp from './components/Signup';
import store from './redux/store';
import Posts from './components/petsocial/Posts';
import {Provider} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import OtpReader from './components/OtpReader';
import Products from './components/Products';

const Drawer = createDrawerNavigator();

export default class Router extends Component {
  render() {
    return (
      <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
        <StatusBar barStyle="light-content" backgroundColor="#ffd97a" />
        <Provider store={store}>
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
              drawerType: 'back',
              drawerIcon: ({focused}) => {
                if (focused) {
                  return <Icon name="caret-right" />;
                } else {
                  return <Icon name="arrow-right" />;
                }
              },
            }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Todo" component={Todo} />
            <Drawer.Screen name="Counter" component={Counter} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Signup" component={SignUp} />
            <Drawer.Screen name="Posts" component={Posts} />
            <Drawer.Screen name="Products" component={Products} />
            <Drawer.Screen name="OtpReader" component={OtpReader} />
          </Drawer.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
}
