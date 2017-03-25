// import libraries
import React from 'react';
import { 
         StyleSheet, 
         Text, 
         View,
         Image 
      } from 'react-native';

// Create a component
const Header = () => { 
   const { container, box } = styles;
   return (
      <View style={container} >
             <View>
                  <Image source ={require('./img/logo_twitch.png')} style={box} />  
            </View>  
      </View>
   ); 
};

// styling components
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'rgb(100,65,165)',
      // flexDirection: 'row',
   },
   box: {
      //flex: 1,
      //backgroundColor: 'gray',
      top: 253.5,
      left: 83 ,
      width: 210,
      height: 100,
   },
});

// export this component
export default Header;
