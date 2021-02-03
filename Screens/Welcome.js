import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import db from '../config.js'
import firebase from 'firebase'

export default class WelcomeScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            isVisibleModal: false,
            confirmPassword: '',
            contact: '',
            address: '',
            firstName: '',
            lastName: '',
        }
    }

    userSignUp = (email, password, confirmPassword) => {
        if (password !== confirmPassword) {
            alert("The passwording planets haven't aligned")
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password).then((/*response*/) => {
                alert("login successful")
                db.collection('users').add({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    contact: this.state.contact,
                    address: this.state.address,
                    email: this.state.email,
                    password: this.state.password,
                    isBookRequestActive: false,
                });
                // alert("User Added Successfully",[{text:'ok', onPress:()=>{this.setState({isVisibleModal:false})}}])
                // ToastAndriod.show("User Added Successfully");
            }).catch(function (error) {
                var errorcode = error.code; alert(error.message)
            });
            //IFTTT
        }
    }

    userLogIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => { return alert("User Entered Successfully"), this.props.navigation.navigate('donateBooks') }).catch(function (error) { var errorcode = error.code; alert(error.message) });
        //IFTTT
    }

    showModal = () => {
        return (
            <View>
            <Modal visible={this.state.isVisibleModal}>
                <ScrollView>
                    <KeyboardAvoidingView>
                        <Text>Welcome to Book Santa</Text>
                        <TextInput placeholder="First Name" style={styles.TextBox} onChangeText={(text) => { this.setState({ firstName: text }) }}></TextInput>
                        <TextInput placeholder="Last Name" style={styles.TextBox} onChangeText={(text) => { this.setState({ lastName: text }) }}></TextInput>
                        <TextInput placeholder="Contact" style={styles.TextBox} onChangeText={(text) => { this.setState({ contact: text }) }}></TextInput>
                        <TextInput placeholder="Address" style={styles.TextBox} onChangeText={(text) => { this.setState({ address: text }) }}></TextInput>
                        <TextInput placeholder="Email" style={styles.TextBox} onChangeText={(text) => { this.setState({ email: text }) }}></TextInput>
                        <TextInput placeholder="Password" style={styles.TextBox} onChangeText={(text) => { this.setState({ password: text }) }}></TextInput>
                        <TextInput placeholder="Comfirm Password" style={styles.TextBox} onChangeText={(text) => { this.setState({ confirmPassword: text }) }}></TextInput>
                        <TouchableOpacity onPress={() => { this.userSignUp(this.state.email, this.state.password, this.state.confirmPassword) }}>
                            <Text>
                                Register
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ isVisibleModal: false })}>
                            <Text>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </ScrollView>
            </Modal>
            </View>
        )
    }

    render() {
        return (
            <View>
                {this.showModal()}
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Image source={require("../assets/bookLogo.png")} style={{width:200, height:200}} />
                <TextInput style={{ textShadowColor: "blue", shadowOffset: { width: 10, height: 20 }, shadowOpacity: 0.2 }} onChangeText={(text) => { this.setState({ email: text }) }} placeholder="Email" keyboardType="email-address">
                </TextInput>
                <TextInput style={{ textShadowColor: "blue", shadowOffset: { width: 10, height: 20 }, shadowOpacity: 0.2 }} onChangeText={(text) => { this.setState({ password: text }) }} placeholder="Password" keyboardType="visible-password">
                </TextInput>
                <TouchableOpacity style={styles.Button} onPress={() => {/*this.userSignUp(this.state.email,this.state.password)*/this.setState({ isVisibleModal: true, }) }}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => { this.userLogIn(this.state.email, this.state.password) }}>
                    <Text>Log In</Text>
                </TouchableOpacity>
            </View>
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

// function stopCodeImplode(noboom) {
//     this.noboom = this.code.code();
// }
// function saveCode(antivirus) {
//     this.protectionSequence = {
//         this.anti-virus = kill virus.anti();
//         this.sheild = protect saveCode.destroy();
//         this.requestAssistance = call help.(
//             if (this.sheild.fail()) {
//                 call 911/100
//             }
//         )
//         this.replace = this.code.code();
//     }
//     stopCodeImplode();
// }