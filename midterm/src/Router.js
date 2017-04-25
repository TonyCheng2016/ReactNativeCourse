import React from 'react';
import { Linking, Button, ScrollView } from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator, DrawerView } from 'react-navigation';
import { Icon, Tile } from 'react-native-elements';

import Recent from './components/Recent';
import Hospital from './components/Hospital';
import ClientMap from './components/ClientMap';
import Details from './components/Details';
import User from './components/User';
//import Ubike from './components/Ubike';



export const RecentStack = StackNavigator({
  Recent: {
    screen: Recent,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '常用診所',
        /*left: (
          <Icon
            name='menu'
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('DrawerOpen')}
          />
        ),*/
      })
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      header: ({ state }) => ({
        title: `${state.params.Name.toUpperCase()}`,
        right: (
          <Button
            title='掛號'
            onPress={() => Linking.openURL(state.params.url)}
          />
        ),
      })
    },
  },
});
export const HospitalStack = StackNavigator({
  Hospital: {
    screen: Hospital,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '找醫院',
        /*left: (
          <Icon
            name='menu'
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('DrawerOpen')}
          />
        ),*/
      })
    },
  },
  ClientMap: {
    screen: ClientMap,
    navigationOptions: {
      header: ({  state }) => ({
        title: `${state.params.District.toUpperCase()}`,
        /*left: (
          <Icon
            name='menu'
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('DrawerOpen')}
          />
        ),*/
      })
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      header: ({ state }) => ({
        title: `${state.params.Name.toUpperCase()}`,
        right: (
          <Button
            title='掛號'
            onPress={() => Linking.openURL(state.params.url)}
          />
        ),
      })
    },
  },
});

export const UserStack = StackNavigator({
  User: {
    screen: User,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: 'User',
        /*left: (
          <Icon
            name='menu'
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('DrawerOpen')}
          />
        ),*/
      })
    },
  },
},
  {
    // headerMode: 'none',
  }
);


export const TabRouter = TabNavigator(
  {
    RecentStack: {
      screen: RecentStack,
      navigationOptions: {
        tabBar: {
          label: 'Favorite',
          icon: ({ tintColor }) => <Icon name="favorite" size={35} color={tintColor} />
        },
      },
    },
    HospitalStack: {
      screen: HospitalStack,
      navigationOptions: {
        tabBar: {
          label: 'Hospital',
          icon: ({ tintColor }) => <Icon name="map" size={35} color={tintColor} />
        },
      },
    },
    UserStack: {
      screen: UserStack,
      navigationOptions: {
        tabBar: {
          label: 'User',
          icon: ({ tintColor }) => <Icon name="account-box" size={35} color={tintColor} />
        },
      },
    },
  },
  {
    animationEnabled: 'true',
  }
);

/*export const DrawerRouter = DrawerNavigator(
  {
    AlbumStack: {
      screen: AlbumStack,
      navigationOptions: {
        drawer: {
          label: '專輯',
          icon: ({ tintColor }) => <Icon name="list" size={25} color={tintColor} />
        },
      },
    },

    MetroStack: {
      screen: MetroStack,
      navigationOptions: {
        drawer: {
          label: '捷運',
          icon: ({ tintColor }) => <Icon name="tram" size={25} color={tintColor} />
        },
      },
    },

    UbikeStack: {
      screen: UbikeStack,
      navigationOptions: {
        drawer: {
          label: 'Ubike單車',
          icon: ({ tintColor }) => <Icon name="directions-bike" size={25} color={tintColor} />
        },
      },
    },

    MeStack: {
      screen: MeStack,
      navigationOptions: {
        drawer: {
          label: '關於我們',
          icon: ({ tintColor }) => <Icon name="account-circle" size={25} color={tintColor} />
        },
      },
    },

    SettingStack: {
      screen: SettingStack,
      navigationOptions: {
        drawer: {
          label: '設定',
          icon: ({ tintColor }) => <Icon name="build" size={25} color={tintColor} />
        },
      },
    },
  },
  {
    initialRouteName: 'UbikeStack',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    // drawerWidth: 200,
    // drawerPosition: 'right',
    contentComponent:
    props => (
      <ScrollView>
        <Tile
          imageSrc={require('./assets/ntue.jpg')}
          featured
        />
        <DrawerView.Items {...props} />
      </ScrollView>
    )
  }
);*/


