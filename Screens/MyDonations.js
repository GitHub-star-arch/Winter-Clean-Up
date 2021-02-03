import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { DrawerItems } from 'react-navigation-drawer'
import MyHeader from '../components/MyHeaderComponent'
import db from '../config'
import { ListItem } from 'react-native-elements'
import firebase from 'firebase'
export default class Donations extends Component {

    constructor() {
        super();
        this.state = {
            allDonations: [],
            userID: firebase.auth().currentUser.email
        }
    }

    getDonationDetails = () => {
        db.collection("allDonations").where("DonorID", "==", this.state.userID).onSnapshot((snapshot) => {
            var allDonations = []
            snapshot.docs.map(doc => {
                var details = doc.data();
                details["doc_ID"] = doc.id
                allDonations.push(details)
            });
            this.setState({
                allDonations: allDonations
            })
        });
    }

    componentDidMount() {
        this.getDonationDetails();
    }   

    sendBook = (bookDetails) => {
        if (bookDetails.requestedStatus == "Donor Intriuged") {
            db.collection('allDonations').doc(bookDetails.doc_ID).update({requestedStatus: "book sent"})
            this.sendNotification(bookDetails,"book sent") 
        }
    }

    render() {
        console.log(this.state.allDonations);
        return (
            <View>
                <MyHeader navigation={this.props.navigation} title="Donations" />
                <FlatList
                    keyExtractor={(item, index) => { index.toString(); }}
                    data={this.state.allDonations} renderItem={({ item }) => {
                        return (
                            <View>
                                <ListItem title={item.BookName}
                                    subtitle={item.requestedStatus}
                                    rightElement={
                                        <TouchableOpacity style={{ backgroundColor: item.requestedStatus == "book sent" ? "green" : "red" }} onPress={() => { this.sendBook(item) }}>
                                            <Text>{item.requestedStatus == "book sent" ? "Book Sent" : "Send Book"}</Text>
                                        </TouchableOpacity>} >
                                </ListItem>
                            </View>);
                    }} >

                </FlatList>
            </View >
        )
    }
}