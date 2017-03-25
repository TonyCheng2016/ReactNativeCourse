// Import libraries for making a component
import React from 'react';
import { Text, View , Image} from 'react-native';
// Make a component
const Block4 = (props) => {
  const { textStyle, viewStyle } = styles;
  
  return (
        <View style={viewStyle}>      
            <Text style={[textStyle, { color: props.btntextColor }]}>{props.btnName}</Text>
        </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'space-around',
    alignItems: 'center',

    // Android Only
    elevation: 2,
  },
  textStyle: {
    fontSize: 10,
    marginTop: -13,
    alignItems: 'center',
    justifyContent: 'space-around',
 
  },
};

// Make the component available to other parts of the app
export default Block4;
