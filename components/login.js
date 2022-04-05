import axios from 'axios';
import md5 from 'md5';
import React from 'react';
import LoginScreen from 'react-native-login-screen';

export default function Login({navigation}) {
  let loginDetails = {
    email: '',
    password: '',
  };

  const login = (email, password) => {
    axios
      .post('http://127.0.0.1:8080/user/login', {
        email,
        password: md5(password),
      })
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <LoginScreen
      disableSocialButtons={true}
      logoImageSource={require('./assets/logo.png')}
      onLoginPress={() => {
        login(loginDetails.email, loginDetails.password);
      }}
      onHaveAccountPress={() => {
        navigation.navigate('Signup');
      }}
      onEmailChange={email => {
        loginDetails.email = email;
      }}
      onPasswordChange={password => {
        loginDetails.password = password;
      }}
    />
  );
}
