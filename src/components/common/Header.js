// Import Libraries
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#66A9F5',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 25,
    color: '#FFFFFF'
  }
};

// Make the component available to other parts of the app
export { Header };
