import React, { Component } from 'react';
import { ScrollView ,
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

import me from '../json/me.json';

// Make a component
class Me extends Component {
  state = { me: [] };

  componentWillMount() {
    this.setState({ me });
  }

  render() {
    return (
      <ScrollView>
        <Tile
          imageSrc={require('../assets/ntue.jpg')}
          featured
          title={`${this.state.me.name.first.toUpperCase()} ${this.state.me.name.last.toUpperCase()}`}
          caption={this.state.me.email}
        />

        <List>
          <ListItem
            title="Email"
            rightTitle={this.state.me.email}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={this.state.me.phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle={this.state.me.login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle={this.state.me.dob}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={this.state.me.location.city}
            hideChevron
          />
        </List>
        <View>

          <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'LOG OUT!',
           '確定登出?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
          )}>

          <View style={styles.button}>
            <Text>Log out</Text>
          </View>
          
        </TouchableHighlight>

      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
    //alignItem:'center'
  },
});
export default Me;
