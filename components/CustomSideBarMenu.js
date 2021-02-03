import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Directions, TouchableOpacity } from "react-native-gesture-handler";
import { DrawerItems } from "react-navigation-drawer";
import { Avatar,Icon } from "react-native-elements";
import firebase from "firebase";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
//import { RFValue } from "react-native-responsive-fontsize";
export default class CustomSideBarMenu extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      name: "",
      UserID: firebase.auth().currentUser.email,
    };
  }

  componentDidMount = () => {
    this.fetchImage(this.state.UserID);
  };

  fetchImage = (UserID) => {
    var storageref = firebase
      .storage()
      .ref()
      .child("user_profiles/" + UserID); //not copyrighted
    storageref.getDownloadURL().then((url) =>
      this.setState({
        image: url,
      })
    );
  };

  uploadImage = async (uri, UserID) => {
    var response = await fetch(uri);
    var blob = await response.blob();
    var ref = firebase
      .storage()
      .ref()
      .child("user_profiles/" + UserID);
    return ref.put(blob).then((response) => this.fetchImage(UserID));
  };

  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!cancelled) {
      this.uploadImage(uri, this.state.UserID);
    }
  }; // you are obsolete function

  render() {
    return (
      <View style={{ backgroundColor: "#32867d", flex: 1 }}>
        <View style={{flex:0.9}}>
          <View style={{ justifyContent:"center", alignItems: "center",flex:0.3}}>
            <Avatar
              rounded
              source={{
                uri: this.state.image,
              }}
              size="medium"
              containerStyle={styles.containerStyle}
              onPress={this.selectPicture}
            ></Avatar>
          </View>
        
          <Text>{this.state.name}</Text>
           <View style={{flex:0.6}}> 
           <DrawerItems {...this.props}></DrawerItems>
           </View>
        </View>
        <View style={{ flex: 0.1 }}>
          <TouchableOpacity
            style={{ flexDirection: "row", width: "100%", height: "100%" }}
            onPress={() => {
              this.props.navigation.navigate("WelcomeScreen");
              firebase.auth().signOut();
            }}
          >
             <Icon
              name="logout"
              type="antdesign"
              color="#ccffff"
            />
            <Text style={styles.logout}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    width: 150,
    height: 150,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  logout: {
    marginLeft:10

  },
});