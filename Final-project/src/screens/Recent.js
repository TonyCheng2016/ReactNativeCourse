import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import recents from '../json/recents.json';
import Panel from '../components/Panel';
// import StatusBar from './StatusBar';
// Make a component
class Recent extends Component {
  // state = { recents: [] };
  constructor(props) {
    super(props);

    this.state = { recents: [] }
  }

  componentWillMount() {
    this.setState({ recents });
  }

  // goToPageTwo = (recent) => {
  //   this.props.navigation.navigate('Details', { ...recent });
  // };

  render() {
    return (
      <ScrollView>
        <List>
          {this.state.recents.map((recent) => (
            <Panel
              key={recent.No}
              recent={{ ...recent }}
              navigation={this.props.navigation}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Recent;
