import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Donate from '../Screens/BookDonateScreen'
import Request from '../Screens/BookRequestScreen'
import { AppStackNavigator } from './AppStackNavigator';
export const AppTabNavigator = createBottomTabNavigator({
    donateBooks: {
        screen: AppStackNavigator,
        navigationOptions: {
            tabBarIcon: <Image source={require('../assets/request-list.png')} style={{ width: 20, height: 20 }}></Image>,
            tabBarLabel: "Donate"
        }
    }, requestBooks: {
        screen: Request,
        navigationOptions: {
            tabBarIcon: <Image source={require('../assets/request-book.png')} style={{ width: 20, height: 20 }}></Image>,
            tabBarLabel: "Beg"
        }
    }
})