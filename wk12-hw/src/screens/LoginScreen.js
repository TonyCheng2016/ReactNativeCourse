import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage, ScrollView } from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormInput, FormValidationMessage, Button ,Tile} from 'react-native-elements';
import { Facebook } from 'expo';


import Spinner from '../components/Spinner';

// Make a component
class LoginScreen extends Component {
  state = {
    email: null,
    password: null,
    error: ' ',
    loading: false,
    
    showSpinner: false,
    token: null,
    status: 'Not Login...'
  };

  facebookLogin = async () => {
    console.log('Testing token....');
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      console.log('Already having a token...');
      this.setState({ token });

     

    } else {
      console.log('DO NOT having a token...');
      this.doFacebookLogin();
    }
  };

  doFacebookLogin = async () => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '217679688732910',
      {
        permissions: ['public_profile'],
        behavior: 'web'
      });

    if (type === 'cancel') {
      console.log('Login Fail!!');
      return;
    }

    await AsyncStorage.setItem('fb_token', token);
    this.setState({ token });
    
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    try {
      await firebase.auth().signInWithCredential(credential);
      const { currentUser } = await firebase.auth();
      console.log(`currentUser = ${currentUser.uid}`);
      this.props.navigation.navigate('UserStack');
    } catch (err) {

    }
  };

  onSignIn = async () => {
    const { email, password } = this.state;
    this.setState({ error: ' ', loading: true });
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.props.navigation.navigate('UserStack');
    } catch (err) {
      //console.log(err);
      this.setState({ loading: false });
      this.props.navigation.navigate('CreateUserStack');
    }
  }

  toNewUser = () => {
    this.props.navigation.navigate('CreateUserStack')
  }


  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' style={{ marginTop: 30 }} />;
    }

    return (
      <Button
        title='Sign in'
        backgroundColor='#4AAF4C'
        onPress={this.onSignIn}
      />
    );
  }
  async componentDidMount() {
    await AsyncStorage.removeItem('fb_token');
  }

  render() {
    return (
      <View >
        <ScrollView>
        <Tile
          style={styles.pngStyle}
          imageSrc={require('../assets/ntue.jpg')}
          featured
          title='Welcome to join us !'
          caption='Login with account !'
        />
        <View style={styles.formStyle}>
          <FormLabel>Email</FormLabel>
          <FormInput
            placeholder='user@email.com'
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          {this.renderButton()}
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
        </View>
        <View style={styles.formStyle}>
          <Button
            title='Sign in with Facebook'
            backgroundColor='#39579A'
            onPress={this.facebookLogin}
          />
        </View>
        <View style={styles.userStyle}>
          <Button
            title='New User?'
            //backgroundColor='#39579A'
            onPress={this.toNewUser}
          />
        </View>
        <Spinner
          visible={this.state.showSpinner}
        />
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  formStyle: {
    marginTop: 100
  },
  userStyle: {
    marginTop: 30
  },
  pngStyle: {
    width:50,
    height:50,
    marginTop: 40
  }
};

export default LoginScreen;