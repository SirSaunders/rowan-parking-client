import React from 'react';
import HomeScreen from './components/pages/HomePage';
import ParkingLotsPage from './components/pages/ParkingLotsPage'
import ConfirmationPage from './components/pages/ConfirmationPage'

import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import { StyleSheet, Text, View } from 'react-native';
const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        ParkingLotsPage: {
            screen: ParkingLotsPage,
        },
        ConfirmationPage: {
            screen: ConfirmationPage,
        },
    },
    {
        initialRouteName: 'Home',
    },

);

export default class Navigator extends React.Component {
    render() {
        return <RootStack />;
    }
}

