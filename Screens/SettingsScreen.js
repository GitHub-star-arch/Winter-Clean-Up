import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import db from '../config.js'
import firebase from 'firebase'
import MyHeader from '../components/MyHeaderComponent.js';

export default class SettingScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            password: '',
            contact: '',
            address: '',
            firstName: '',
            lastName: '',
            docID: ''
        }
    }
    getUserDetail = () => {
        var email = firebase.auth().currentUser.email
        db.collection("users").where('email', '==', email).get().then((snapshot) => {
            snapshot.forEach(doc => {
                var data = doc.data();
                this.setState({
                    password: data.password,
                    contact: data.contact,
                    address: data.address,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    docID: doc.id
                })
            })
        })
    }
    updateUserDetails = () => {
        db.collection("users").doc(this.state.docID).update({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            contact: this.state.contact,
            address: this.state.address,
            password: this.state.password
        });
        alert("User Chcanged Successfully")
    }
    componentDidMount() {
        this.getUserDetail()
    }
    render() {
        return (
            <View>
                <MyHeader navigation={this.props.navigation} title="Setting" />
                <TextInput value={this.state.firstName} style={styles.TextBox} onChangeText={(text) => { this.setState({ firstName: text }) }}></TextInput>
                <TextInput value={this.state.lastName} style={styles.TextBox} onChangeText={(text) => { this.setState({ lastName: text }) }}></TextInput>
                <TextInput value={this.state.contact} style={styles.TextBox} onChangeText={(text) => { this.setState({ contact: text }) }}></TextInput>
                <TextInput value={this.state.address} style={styles.TextBox} onChangeText={(text) => { this.setState({ address: text }) }}></TextInput>
                <TextInput value={this.state.password} style={styles.TextBox} onChangeText={(text) => { this.setState({ password: text }) }}></TextInput>
                <TouchableOpacity style={styles.Button} onPress={() => { this.updateUserDetails() }}>
                    <Text>
                        Save Changes
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: "red",
        borderWidth: 5,
        width: 100,
        height: 40,
        marginTop: 10,
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 0.2
    },
    TextBox: {
        //border:'solid',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 0.2
    }
})