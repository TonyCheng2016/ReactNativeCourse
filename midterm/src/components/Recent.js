import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import recents from '../json/recents.json';
// Make a component
class Recent extends Component {
  state = { recents: [] };

  componentWillMount() {
    this.setState({ recents });
  }

  goToPageTwo = (recent) => {
    this.props.navigation.navigate('Details', { ...recent });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {this.state.recents.map((recent) => (
            <ListItem
              key={recent.No}
              roundAvatar
              avatar={{ uri: recent.image }}
              //leftIcon={{name: recent.District}}
              title={recent.Name}
              subtitle={recent.Address}
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

export default Recent;

/*const Contact = () => {

  return (
      <ScrollView>
        <List>
          <ListItem
            title="Notifications"
          />
          <ListItem
            title="Profile"
          />
          <ListItem
            title="Password"
          />
        </List>
        <List>
          <ListItem
            title="Sign Out"
            rightIcon={{ name: 'cancel' }}
          />
        </List>
      </ScrollView>
  );
};

export default Contact;*/
