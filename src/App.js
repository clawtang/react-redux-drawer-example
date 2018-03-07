import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import tabNav from './components/tabNav';


const drawernav = DrawerNavigator({
  DrawerItem1: {
    screen: tabNav,
    navigationOptions: {
      drawerLabel: 'Drawer Item 1',
      drawerIcon: ({ tintColor }) => <Icon name="rocket" size={24} color={tintColor} />
    },
  }
});

export default drawernav;
