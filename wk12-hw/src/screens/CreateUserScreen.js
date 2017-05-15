import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage,Picker ,ScrollView} from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { Facebook } from 'expo';

import Confirm from '../components/Confirm';
import Spinner from '../components/Spinner';

// Make a component
class CreateUserScreen extends Component {
  state = {
    email: null,
    password: null,
    birthday: null,
    phone: null,
    username: null,
    city: null,
    gender: 'male',
    saving: false,

    error: ' ',
    //loading: false,
    showModal: false,
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

  

  onSignUp = async () => {
    const { email, password } = this.state;
    this.setState({ error: ' ', saving: true });
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.props.navigation.navigate('UserStack');
      
    } catch (err) {
      this.setState({ showModal: true ,saving: false});
    }
  }

  onCreateUser = async () => {
    const { username, email, password, city, phone, gender ,birthday} = this.state;
    
    try {
    this.setState({
      email: '',
      password: '',
      birthday: '',
      city: '',
      phone: '',
      gender:'',
      error: '',
      saving: true,
      showModal: false,
      showSpinner: true
    });

      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const { currentUser } = firebase.auth();
      let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
      await dbUserid.set({ username, email, password, city, phone, gender,birthday});
      this.setState({ showSpinner: false ,saving: false});
      this.props.navigation.navigate('UserStack');
    } catch (err) {
      this.setState({
        email: '',
        password: '',
        birthday: '',
        city: '',
        phone: '',
        gender: '',
        error: err.message,
        saving: false,
        showModal: false,
        showSpinner: false
      });
    }
  }

  onCLoseModal = () => {
    this.setState({
      email: '',
      password: '',
      birthday: '',
      city: '',
      phone: '',
      gender: '',
      error: '',
      saving: false,
      showModal: false
    });
  }

  renderButton() {
    if (this.state.saving) {
      return <ActivityIndicator size='large' />;
    }

    return (
      <Button
        title='Sign Up'
        style={{ marginTop: 10 }}
        //backgroundColor='#4AAF4C'
        onPress={this.onSignUp}
      />
    );
  }
  async componentDidMount() {
    await AsyncStorage.removeItem('fb_token');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
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
          <FormLabel>Username</FormLabel>
          <FormInput
              autoCorrect={false}
              placeholder='Stephen Curry'
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
          />
          <FormLabel>Phone</FormLabel>
          <FormInput
              autoCorrect={false}
              placeholder='(+886)09xx-xxx-xxx'
              value={this.state.phone}
              onChangeText={phone => this.setState({ phone })}
          />
          <FormLabel>City</FormLabel>
          <FormInput
              autoCorrect={false}
              placeholder='Taipei city'
              value={this.state.city}
              onChangeText={city => this.setState({ city })}
          />
          <FormLabel>Birthday</FormLabel>
          <FormInput
            autoCorrect={false}
            placeholder='2017-05-20'
            value={this.state.birthday}
            onChangeText={birthday => this.setState({ birthday })}
          />
          <Picker
              selectedValue={this.state.gender}
              onValueChange={gender => this.setState({ gender })}
          >
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
          </Picker>
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
        <Confirm
          title='Are you sure to create a new user?'
          visible={this.state.showModal}
          onAccept={this.onCreateUser}
          onDecline={this.onCLoseModal}
        />
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
    marginTop: 20
  }
};

export default CreateUserScreen;