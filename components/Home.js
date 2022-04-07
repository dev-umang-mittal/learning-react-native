import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const Home = ({navigation}) => {
  const counter = useSelector(state => state);
  console.log('🚀 ~ file: Home.js ~ line 15 ~ Home ~ counter', counter);
  const dispatch = useDispatch();
  const [showModal, setModal] = useState(false);

  const styles = StyleSheet.create({
    contianer: {
      alignContent: 'center',
      justifyContent: 'center',
      padding: 100,
    },
  });

  return (
    <>
      <Modal
        animationType="slide"
        visible={showModal}
        onRequestClose={() => {
          setModal(!showModal);
        }}>
        <View>
          <Text>This is a modal</Text>
          <Button onPress={() => setModal(false)} title={'Close Modal'} />
        </View>
      </Modal>
      <Button onPress={() => setModal(true)} title={'Open Modal'} />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title={'Counter'}
      />
      <Button
        onPress={() => {
          navigation.navigate('Todo');
        }}
        title={'Todo App'}
      />

      <Button onPress={() => navigation.navigate('Login')} title={'Login'} />

      <View style={styles.contianer}>
        <Button
          title="_"
          onPress={() => {
            dispatch({type: 'SUBTRACT'});
          }}></Button>
        <Text style={{marginHorizontal: 70}}>{counter}</Text>
        <Button
          title="+"
          onPress={() => {
            dispatch({type: 'ADD'});
          }}></Button>
      </View>
    </>
  );
};

export default Home;
