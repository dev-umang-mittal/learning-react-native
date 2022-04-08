import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {BACKEND_URL} from '@env';

export default function Post({postDetails}) {
  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: '#fefefe',
      margin: 5,
      marginHorizontal: 10,
      padding: 10,
    },
    title: {
      fontSize: 20,
      color: '#000',
      fontWeight: 'bold',
    },
    // authorContainer: {},
    authorName: {
      paddingHorizontal: 5,
      color: '#000000',
      fontSize: 10,
    },
    image: {
      height: 250,
      flex: 1,
    },
  });

  return (
    <View style={styles.wrapper}>
      {console.log(BACKEND_URL + postDetails.image)}
      <Text style={styles.title}>{postDetails.title}</Text>
      <View style={styles.authorContainer}>
        <Text style={styles.authorName}>{postDetails.authorDetails.name}</Text>
      </View>

      <Image
        style={styles.image}
        source={{uri: BACKEND_URL + postDetails.image}}
        resizeMode={'contain'}
      />
    </View>
  );
}
