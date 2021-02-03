import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Donate from '../Screens/BookDonateScreen'
import Request from '../Screens/BookRequestScreen'
import { createStackNavigator } from 'react-navigation-stack'
import StalkingScreen from '../Screens/ReciverDetailScreen';
export const AppStackNavigator = createStackNavigator({
    bookDonateList: {
        screen: Donate,
    },
    recieverDetails: {
        screen: StalkingScreen,
    }
})