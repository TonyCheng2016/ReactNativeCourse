// Import libraries
import React from 'react';
import { AppRegistry } from 'react-native';
//import Box from './page1';
import Box from './page2';
//import Box from './page3';

// Create a component
//===Page1
//const App = () => <Box />;

//===Page2
const App = () => <Box 
            headerText={'HearthStone'}
            textColor={'white'}
            />;

//===Page3
// const App = () => <Box 
//             headerText={'Search'}
//             textColor={'rgb(185,163,227)'}
//             />;

//  Render to devices
AppRegistry.registerComponent('wk4', () => App);
