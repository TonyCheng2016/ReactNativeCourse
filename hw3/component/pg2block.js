// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Block2 = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
        <View>
            <View style={viewStyle}>
            <Text style={[textStyle, { color: props.textColor }]}>{props.secBlockText}</Text>
            </View>
        </View>
  );
};

const styles = {
  viewStyle: {
    //flexDirection: 'column',
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    width:187.5,
    //paddingTop: 15,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // Android Only
    elevation: 2,
  },
  textStyle: {
    fontSize: 13,
    //color:'rgb(100,65,165)',
  }
  
};

// Make the component available to other parts of the app
export default Block2;
