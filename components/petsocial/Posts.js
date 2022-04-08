import React from 'react';
import {Text, View, FlatList, StatusBar} from 'react-native';
import axios from 'axios';
import {BACKEND_URL} from '@env';
import Post from './Post';

export default function Posts() {
  const [posts, setPosts] = React.useState([]);

  React.useLayoutEffect(() => {
    axios.get(`${BACKEND_URL}post?limit=10&skip=0`).then(res => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={posts}
        renderItem={({item}) => {
          return <Post postDetails={item}></Post>;
        }}
      />
    </View>
  );
}
