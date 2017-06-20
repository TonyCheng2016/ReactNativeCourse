import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { List, ListItem, Icon, Button } from 'react-native-elements';

import recents from '../json/recents.json';

// Make a component
class Hospitals extends Component {
  state = { recents: [] };

  componentWillMount() {
    this.setState({ recents });
  }

  goToPageTwo = (recent) => {
    this.props.navigation.navigate('ClientMap', { ...recent });
  };

  _getLocationAsync = async () => {
    let status = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      region: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        longitudeDelta: 0.01,
        latitudeDelta: 0.02
      }
    });
  };

  render() {
    return (
      <ScrollView style={styles.mainPage}>
        <List>
          <Button
            raised
            icon={{ name: 'my-location' }}
            backgroundColor='#517fa4'
            title={'目前位置'}
            onPress={this._getLocationAsync}
          />
          <View style={styles.button}>
            <Text>區域:新北市</Text>
          </View>
          {this.state.recents.map((recent) => (
            <ListItem
              key={recent.No}
              roundAvatar
              avatar={{ uri: recent.image }}
              title={'新北市'}
              subtitle={recent.District}
              onPress={() => this.goToPageTwo(recent)}
            // hideChevron
            // rightTitle='More...'
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    //backgroundColor: '#eeeeee',
    padding: 10,
    alignItems: 'center'
  },
  mainPage: {
    backgroundColor: '#eeeeee',
  },
});
export default Hospitals;
