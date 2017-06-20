import React from 'react';
import { Linking, Button, ScrollView, View } from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator, DrawerView } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Recent from './screens/Recent';
import Hospital from './screens/Hospital';
import ClientMap from './screens/ClientMap';
import Details from './screens/Details';
// import User from './screens/User';
//import Ubike from './components/Ubike';
import LoginScreen from './screens/LoginScreen';
import UserScreen from './screens/UserScreen';
import SettingScreen from './screens/SettingScreen';
import CreateUserScreen from './screens/CreateUserScreen';
import Message from './screens/Message';
// import Expo from 'expo'
const headerBGcolor = '#dd3333';
const headerFontcolor = '#ffffff';
export const RecentStack = StackNavigator({
  Recent: {
    screen: Recent,
    navigationOptions: {

      header: ({ navigate }) => ({
        title: 'Hospital',
        tintColor: 'yellow',
        style: { backgroundColor: headerBGcolor },
        titleStyle: {
          color: headerFontcolor,
          // fontWeight: '300',
          // fontSize: '36',
          textAlign: 'center',
          // backgroundColor: 'yellow',
          // marginRight: 56
        },
        right: (


          <Icon
            name='more-vert'
            iconStyle={{ marginRight: 16 }}

          />

        ),
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
        style: { backgroundColor: headerBGcolor, height: 64 },
        titleStyle: {
          color: headerFontcolor,
          // fontWeight: '300',
          // fontSize: '36',
          textAlign: 'center',
        },
        right: (
          <Button
            title='掛號'
            backgroundColor='#dd3333'
            onPress={() => Linking.openURL(state.params.url)}
          />
        ),
      })
    },
  },
  Message: {
    screen: Message,
    navigationOptions: {
      header: () => ({
      })
    },
  },
}, {
    // headerMode: 'none',
    headerMode: 'float'
  });

export const HospitalStack = StackNavigator({
  Hospital: {
    screen: Hospital,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '找醫院',
        style: { backgroundColor: headerBGcolor, height: 64 },
        titleStyle: {
          color: headerFontcolor,
          // fontWeight: '300',
          // fontSize: '36',
          textAlign: 'center',
        },
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
      header: ({ state }) => ({
        title: `${state.params.District.toUpperCase()}`,
        style: { backgroundColor: headerBGcolor, height: 64 },
        titleStyle: {
          color: headerFontcolor,
          // fontWeight: '300',
          // fontSize: '36',
          textAlign: 'center',
        },
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
        style: { backgroundColor: headerBGcolor, height: 64 },
        titleStyle: {
          color: headerFontcolor,
          // fontWeight: '300',
          // fontSize: '36',
          textAlign: 'center',
        },
        right: (
          <Button
            title='掛號'
            backgroundColor='#dd3333'
            onPress={() => Linking.openURL(state.params.url)}
          />
        ),
      })
    },
  },
  Message: {
    screen: Message,
    navigationOptions: {
      header: () => ({
      })
    },
  },
});


export const UserStack = StackNavigator({
  UserScreen: {
    screen: UserScreen,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: 'USER-INFO',
        style: { backgroundColor: headerBGcolor, height: 64 },
        titleStyle: {
          color: headerFontcolor,
          // fontWeight: '300',
          // fontSize: '36',
          textAlign: 'center',
        },
        right: (
          <Icon
            name='settings'
            iconStyle={{ marginRight: 10 }}
            onPress={() => navigate('SettingScreen')}
          />
        ),
        left: null,
      })
    }
  },
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: 'SETTING',
        style: { backgroundColor: headerBGcolor, height: 64 },
        titleStyle: {
          color: headerFontcolor,
          // fontWeight: '300',
          // fontSize: '36',
          textAlign: 'center',
        },
        left: (
          <Icon
            name='navigate-before'
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('UserScreen')}
          />
        ),
      })
    }
  }
});

export const CreateUserStack = StackNavigator({
  CreateUserScreen: {
    screen: CreateUserScreen,
  }
});

export const TabRouter = TabNavigator(
  {
    RecentStack: {
      screen: RecentStack,
      navigationOptions: {
        tabBar: {
          label: 'Favorite',
          icon: ({ tintColor }) => <Icon name="favorite" size={35} color={tintColor} />
        },
        // header: {
        //   style: {
        //     backgroundColor: '#42a5f5',
        //   }
        // },
        // headerTintColor: 'blue',
      },

    },
    HospitalStack: {
      screen: HospitalStack,
      navigationOptions: {
        tabBar: {
          label: 'Hospital',
          icon: ({ tintColor }) => <Icon name="local-hospital" size={35} color={tintColor} />
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
    tabBarOptions: {
      // activeTintColor: 'white',
      // activeBackgroundColor:'red',
      activeTintColor: 'white',
      inactiveTintColor: '#bdbdbd',
      activeBackgroundColor: '#b71c1c',
      inactiveBackgroundColor: '#dd3333',

    }
  }
);


export const LoginStack = StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
  },
  CreateUserStack: {
    screen: CreateUserStack,
  },
  TabRouter: {
    screen: TabRouter,
  },
},
  {
    headerMode: 'none',
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


