import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Header, Icon, ListItem } from 'react-native-elements'
import Notifications from '../Screens/MyNotifications'
import { SwipeListView } from 'react-native-swipe-list-view'
import { ImageBackground } from 'react-native'
import { Dimensions } from 'react-native'
export default class SwipableFL extends Component {

    constructor() {
        super();
        this.state = {
            allNotifications: this.props.allNotifications
        }
    }

    onSwipeValueChange = swipedata => {
        var allNotifications = this.state.allNotifications
        const { key, value } = swipedata
        if (value < -Dimensions.get('window').width) {
            const newdata = [...allNotifications]
            const prewindex = allNotifications.findindex(item => item.key == key)
            newdata.splice(prewindex, 1)
            this.setState({
                allNotifications: newdata,
            })
        }
    }

    render() {
        return (
            <View>
                <SwipeListView
                    disableRightSwipe
                    data={this.state.allNotifications}
                    renderItem={data => (
                        <ListItem
                            leftElement={<Icon name="exclmationcircle" type="ant-design"></Icon>}
                            title={data.item.BookName}
                            subtitle={data.item.Message}
                            bottomDivider
                        >
                        </ListItem>
                    )}
                    renderHiddenItem={() => {
                        return (
                            <View style={{ backgroundColor: "red" }}>
                                <Icon name="trash" type="entypo"></Icon>
                            </View>
                        )
                    }}
                    rightOpenValue={-Dimensions.get('window').width()}
                    onSwipeValueChange={this.onSwipeValueChange}
                >

                </SwipeListView>

            </View>
        )
    }
}