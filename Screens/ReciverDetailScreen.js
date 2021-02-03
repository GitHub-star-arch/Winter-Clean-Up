import React, { useImperativeHandle } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import db from '../config.js'
import firebase from 'firebase'
import MyHeader from '../components/MyHeaderComponent.js';

export default class StalkingScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Details: this.props.navigation.getParam("details"),
            BookName: this.props.navigation.getParam("details")["BookName"],
            Reason: this.props.navigation.getParam("details")["Reason"],
            userName: this.props.navigation.getParam("details")["userName"],
            UniqueID: this.props.navigation.getParam("details")["UniqueID"],
            email: this.props.navigation.getParam("details")["UserId"],
            ReciverContact: '',
            ReciverName: '',
            ReciverID: '',
        }
    }

    componentDidMount() {
        this.getUserDetails()
    }

    updateBookStat = () => {
        db.collection('allDonations').add({
            BookName: this.state.BookName,
            UniqueID: this.state.UniqueID,
          //  requestedBY: this.state.ReciverName,
            ReciverID: this.state.ReciverID,
            requestedStatus: "Donor Intriuged",
            DonorID: this.state.email
        })
    }

    addNotification = () => {
        db.collection('allNotifications').add({
            BookName: this.state.BookName,
            UniqueID: this.state.UniqueID,
         //   requestedBY: this.state.ReciverName,
            ReciverID: this.state.ReciverID,
            NotificationStatus: "Unread",
            DonorID: this.state.email,
            Date: firebase.firestore.FieldValue.serverTimestamp(),
            Message: this.state.userName + " is showing suspisious amount of interest in your request."
        })
        this.props.navigation.navigate('bookDonateList')
    }

    getUserDetails = () => {
        db.collection('users').where(
            'email', '==', this.state.email
        ).get().then(Snapshot => {
            Snapshot.forEach(doc => {
                this.setState({
                    ReciverContact: doc.data().contact,
                    ReciverName: doc.data().firstname,
                    ReciverID: doc.data().email,
                })
            })
        })

    }

    render() {
        return (
            <View style={{ backgroundColor: "black" }}>
                <MyHeader navigation={this.props.navigation} title="Details" />
                <Text>
                    Reciver Details
                </Text>
                <Card>
                    <Text>
                        BookName:{this.state.BookName}
                        <br />
                        Reason:{this.state.Reason}
                    </Text>
                    <br />
                    <Card>
                        <Text>
                            Reciver Details:
                            <br />
                        </Text>
                        <Text>
                            Name: {this.state.ReciverName}
                            <br />
                            Contact: {this.state.ReciverContact}
                            <br />
                            UniqueID: {this.state.UniqueID}
                        </Text>
                        {this.state.email !== this.state.ReciverID ? null : (
                            <Card>
                                <TouchableOpacity style={{ backgroundColor: "red" }} onPress={() => { this.updateBookStat(); this.addNotification() }}>
                                    <Text>
                                        I wanna Donate
                            </Text>
                                </TouchableOpacity>
                            </Card>
                        )}
                    </Card>
                </Card>
            </View>
        )
    }
}