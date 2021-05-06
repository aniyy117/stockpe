import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDhzN6V2zyMxx7pnBO3WxsG9pUdNyf7Lts",
    authDomain: "stockpe-35e01.firebaseapp.com",
    projectId: "stockpe-35e01",
    storageBucket: "stockpe-35e01.appspot.com",
    messagingSenderId: "336841878264",
    appId: "1:336841878264:web:c944ca53e062b736fca90d",
    measurementId: "G-S40T840N3F"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;