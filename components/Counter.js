import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {counterContext} from '../App';

function Counter({route, navigation}) {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#eaeaea',
    },
    wrapper: {
      backgroundColor: '#61dafb',
      color: '#000',
      fontSize: 30,
      borderRadius: 20,
      padding: 20,
      fontWeight: 'bold',
      borderColor: '#000',
      borderWidth: 6,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
  });

  return (
    <>
      <View>
        <Button
          title="_"
          onPress={() => {
            dispatch({type: 'SUBTRACT'});
          }}></Button>
        <Text style={{marginHorizontal: 100}}>{counter}</Text>
        <Button
          title="+"
          onPress={() => {
            dispatch({type: 'ADD'});
          }}></Button>
      </View>
    </>
  );
}

export default Counter;
