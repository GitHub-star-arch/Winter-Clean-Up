import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import MyHeader from '../components/MyHeaderComponent'
export default class Notifications extends Component {
    render() {
        return (
            <View>
                <MyHeader navigation={this.props.navigation} title="Notifications" />
                <Text>Wow you actually got notified I didn't know you had friends!</Text>
            </View>
        )
    }
}