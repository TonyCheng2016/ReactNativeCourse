import React, { Component } from 'react';
import { View, Picker, ActivityIndicator ,ScrollView} from 'react-native';
import * as firebase from 'firebase';

import { FormLabel, FormInput, Button, CheckBox } from 'react-native-elements';

// Make a component
class SettingScreen extends Component {
  state = {
    email: null,
    phone: null,
    birthday:null,
    username: null,
    city: null,
    gender: 'male',
    saving: false
  };

  async componentWillMount() {
    const { currentUser } = firebase.auth();
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    try {
      let snapshot = await dbUserid.once('value');
      let username = snapshot.val().username;
      let email = snapshot.val().email;
      let birthday = snapshot.val().birthday;
      let city = snapshot.val().city;
      let phone = snapshot.val().phone;
      let gender = snapshot.val().gender;

      this.setState({ username, email, city, phone, gender ,birthday});
    } catch (err) { }
  }

  onSaveInfo = async () => {
    this.setState({ saving: true });
    const { currentUser } = firebase.auth();
    const { email, phone, username, city, gender ,birthday } = this.state;
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    await dbUserid.set({ email, phone, username, city, gender ,birthday });
    this.setState({ saving: false });
  }

  renderButton() {
    if (this.state.saving) {
      return <ActivityIndicator size='large' />;
    }

    return (
      <Button
        style={{ marginTop: 10 }}
        title='Save Setting'
        onPress={this.onSaveInfo}
      />
    );
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.formStyle}>
        <ScrollView>
        <FormLabel>Username</FormLabel>
        <FormInput
          autoCorrect={false}
          placeholder='Stephen Curry'
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <FormLabel>Email</FormLabel>
        <FormInput
          placeholder='user@email.com'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <FormLabel>Birthday</FormLabel>
        <FormInput
          autoCorrect={false}
          placeholder='2017-05-20'
          value={this.state.birthday}
          onChangeText={birthday => this.setState({ birthday })}
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
        <Picker
          selectedValue={this.state.gender}
          onValueChange={gender => this.setState({ gender })}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
        {this.renderButton()}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  formStyle: {
    marginTop: 50
  }
};

export default SettingScreen;
