import React from 'react';
import {
  View,
} from 'react-native';

const CardSection = (props) => (
  <View style={[styles.containerStyle, props.style]}>
    {props.children}
  </View>
);

export { CardSection };

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    // alignItems: 'flex-end',
    // flex: 1
  }
};
