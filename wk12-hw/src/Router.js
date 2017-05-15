import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import LoginScreen from './screens/LoginScreen';
import UserScreen from './screens/UserScreen';
import SettingScreen from './screens/SettingScreen';
import CreateUserScreen from './screens/CreateUserScreen';

export const UserStack = StackNavigator({
    UserScreen: {
        screen: UserScreen,
        navigationOptions: {
            header: ({ navigate }) => ({
                title: 'USER-INFO',
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
export const LoginStack = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
    },
    CreateUserStack: {
        screen: CreateUserStack,
    },
    UserStack: {
        screen: UserStack,
    },
},
    {
        headerMode: 'none',
    }
);
