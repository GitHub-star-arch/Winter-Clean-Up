import firebase from 'firebase';
require('@firebase/firestore');
var firebaseConfig = {
    apiKey: "AIzaSyAl1Mho13tGAx5AZpFtNVDMNCRPI7uPxz4",
    authDomain: "nithin-ecc45.firebaseapp.com",
    databaseURL: "https://nithin-ecc45.firebaseio.com",
    projectId: "nithin-ecc45",
    storageBucket: "nithin-ecc45.appspot.com",
    messagingSenderId: "1034458624852",
    appId: "1:1034458624852:web:66a5ca2e169a956e9bcec1",
    measurementId: "G-CKS99VZ6G4"
}
//backupDatabase
//var firebaseConfig = { apiKey: "AIzaSyBIxYOye6fslWL1dHfZWRGU2IHm--O-Gww", authDomain: "expo-a8dea.firebaseapp.com", databaseURL: "https://expo-a8dea.firebaseio.com", projectId: "expo-a8dea", storageBucket: "expo-a8dea.appspot.com", messagingSenderId: "389608467500", appId: "1:389608467500:web:1502d08267134e83d27589", measurementId: "G-LPSJ04FP42" };
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();