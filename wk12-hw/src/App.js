import React, { Component } from 'react';
import * as firebase from 'firebase';
import { View} from 'react-native';
import { LoginStack } from './Router';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDYSyoqs5oGau7IQfjdVCF4JEr6Y26QsMM",
      authDomain: "fir-app-wkc-tony.firebaseapp.com",
      databaseURL: "https://fir-app-wkc-tony.firebaseio.com",
      projectId: "fir-app-wkc-tony",
      storageBucket: "fir-app-wkc-tony.appspot.com",
      messagingSenderId: "110598846477"

    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <LoginStack />
      </View>
    );
  }
}


export default App;
