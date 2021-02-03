import React, { Component } from 'react'
import { Text, View} from 'react-native'
import SettingScreen from '../Screens/SettingsScreen'
import { AppTabNavigator } from './AppTabNavigator.js'
import CustomSideBarMenu from './CustomSideBarMenu'
import { Icon } from 'react-native-elements'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Donations from '../Screens/MyDonations'
import Notifications from '../Screens/MyNotifications'
import MineAllMine from '../Screens/RecivedBooksScreen'
export const AppDrawerNavigator = createDrawerNavigator(
    {
        Home: { screen: AppTabNavigator,
        navigationOptions: {drawerIcon: <Icon name="home" type="font-awesome" color="#ccffff" />} },
        Settings: { screen: SettingScreen, 
        navigationOptions: {drawerIcon: <Icon name="settings" type="feather" color="#ccffff" />} },
        Donations: { screen: Donations,
        navigationOptions: {drawerIcon: <Icon name="send" type="font-awesome" color="#ccffff" />} },
        Notifications: { screen: Notifications,
        navigationOptions: {drawerIcon: <Icon name="compass" type="entypo" color="#ccffff" />} },
        RecivedBooks: {screen: MineAllMine,
        navigationOptions: {drawerIcon: <Icon name="gift" type="font-awesome" color="#ccffff" />} },
    },
    { contentComponent: CustomSideBarMenu },
    { initalRoutename: 'Home' }
)