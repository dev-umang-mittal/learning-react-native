import React, {useState, useRef} from 'react';
import {DrawerLayoutAndroid, View, Text, Button} from 'react-native';

const Drawer = props => {
  const [isDrawerOpen, setDrawerState] = useState(false);
  const drawer = useRef(null);

  const DrawerDialog = () => (
    <>
      <Text>Drawer</Text>
    </>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerBackgroundColor="#ffd97a"
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={DrawerDialog}>
      <Button title="Open Drawer" onPress={() => drawer.current.openDrawer()} />
      <Text>{props.text}</Text>
    </DrawerLayoutAndroid>
  );
};

export default Drawer;
