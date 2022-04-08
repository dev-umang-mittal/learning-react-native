import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  Keyboard,
  ToastAndroid,
  FlatList,
  TouchableWithoutFeedback,
  Dimensions,
  Alert,
  Vibration,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SwipeView from 'react-native-swipeview';
import {createStore} from 'redux';
import axios from 'axios';

export default function Todo() {
  const [id, setId] = useState(1000);
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  React.useLayoutEffect(() => {
    axios
      .get('https://jsonplaceholder.cypress.io/todos')
      .then(res => {
        console.log(res.data);
        setTodoList(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
    },
    todoTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
    },
    createButton: {
      marginTop: 15,
      borderRadius: 20,
      backgroundColor: '#ffd97a',
      color: '#000',
      fontSize: 20,
      textAlign: 'center',
      alignItems: 'center',
      width: 100,
      padding: 8,
      borderWidth: 1,
    },
    todoInput: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#000',
    },
    todoListContainer: {
      marginTop: 10,
      flex: 1,
    },
    todoItemContainer: {
      padding: 2,
      flex: 1,
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginVertical: 4,
    },
    todoItemText: {
      fontSize: 15,
      color: '#000',
      fontWeight: 'bold',
    },
  });

  const addTodo = () => {
    if (todo === '') {
      Alert.alert(
        'No Title Found',
        'Enter the title of the todo to create it.',
      );
      return;
    }
    setTodoList(prev => {
      return [{id, title: todo, completed: false}, ...prev];
    });
    setId(prev => prev + 1);
    setTodo('');
    Keyboard.dismiss();
  };

  const deleteTodo = id => {
    const newList = todoList.filter(item => {
      return item.id !== id;
    });
    setTodoList(newList);
    Vibration.vibrate([0, 300]);
    ToastAndroid.show('Deleted Successfully', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.todoTitle}>Enter Todo</Text>
      <TextInput
        style={styles.todoInput}
        numberOfLines={2}
        value={todo}
        onChangeText={text => setTodo(text)}
        editable
        multiline
      />
      <View
        style={{
          display: 'flex',
          alignItems: 'flex-end',
        }}>
        <View style={{marginTop: 15}}>
          <Icon.Button
            name="plus-square-o"
            backgroundColor="#ffd97a"
            color="#000"
            onPress={addTodo}>
            Create Todo
          </Icon.Button>
        </View>
      </View>
      <View style={styles.todoListContainer}>
        <FlatList
          ListHeaderComponent={
            <Text style={styles.todoTitle}>Your Todo's</Text>
          }
          style={styles.todoItemContainer}
          data={todoList}
          initialNumToRender={2}
          updateCellsBatchingPeriod={5000}
          // onRefresh={
          //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          // }
          ListEmptyComponent={
            <Text>Todo List is Empty. Start by creating one.</Text>
          }
          renderItem={({item}) => {
            return (
              <SwipeView
                rightOpenValue={-340}
                leftOpenValue={300}
                swipeDuration={500}
                swipeToOpenPercent={20}
                previewDuration={100}
                previewOpenValue={-20}
                onSwipedLeft={() => deleteTodo(item.id)}
                previewSwipeDemo={true}
                directionalDistanceChangeThreshold={1}
                renderRightView={() => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        backgroundColor: 'red',
                        borderWidth: 1,
                        borderColor: '#000',
                        margin: 5,
                        borderRadius: 10,
                      }}></View>
                  );
                }}
                renderVisibleContent={() => {
                  return (
                    <View
                      style={{
                        overflow: 'hidden',
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        padding: 15,
                        backgroundColor: '#fefefe',
                        borderWidth: 1,
                        borderColor: '#000',
                        margin: 5,
                        borderRadius: 10,
                      }}
                      key={item.id}>
                      <Text style={{...styles.todoItemText, maxWidth: 260}}>
                        {item.title}
                      </Text>
                      <Icon.Button
                        name="trash-o"
                        backgroundColor="#fff"
                        color="red"
                        onPress={() => deleteTodo(item.id)}
                      />
                    </View>
                  );
                }}></SwipeView>
            );
          }}
        />
        {/* </ScrollView> */}
      </View>
    </View>
  );
}
