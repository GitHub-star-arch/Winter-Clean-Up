import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Header, Icon } from 'react-native-elements'
import Notifications from '../Screens/MyNotifications'
export default class MyHeader extends Component {
    render() {
        return (
            <View>
                <Header
                    backgroundColor="lime"
                    leftComponent={<Icon
                        name="bars"
                        type="ant-design"
                        color="#005ce6"
                        onPress={() => { this.props.navigation.toggleDrawer() }}
                    />}
                    centerComponent={{
                        text: this.props.title
                    }}
                    rightComponent={<Icon
                        name="bell"
                        type="entypo"
                        color="#005ce6"
                        onPress={() => { this.props.navigation.navigate("Notifications") }}
                    />}
                />
            </View>
        )
    }
}