import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import { List } from 'react-native-elements';

import albums from '../json/albums.json';
import Panel from './Panel';
// Make a component
class PageOne extends Component {
  constructor(props) {
    super(props);

    this.state = { albums: [] }
  }


  componentWillMount() {
    this.setState({ albums });
    console.log(this.state);
  }


  render() {

    return (
      <ScrollView>
        <List>
          {this.state.albums.map((album) => (
            <Panel
              key={album.title}
              album={{ ...album }}
              navigation = {this.props.navigation}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default PageOne;
