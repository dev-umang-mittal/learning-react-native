import axios from 'axios';
import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';

export default function Products() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      setProducts(res.data);
    });
  }, []);

  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      padding: 10,
      margin: 1,
      backgroundColor: '#FFF',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
    },
    image: {
      width: 200,
      height: 200,
    },
  });

  const Product = ({item}) => {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({item}) => <Product item={item} />}
      />
    </View>
  );
}
