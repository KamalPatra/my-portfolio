import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDJy-4y4jgxAzxobASiWAJnlMeRapPtpgw",
    authDomain: "myportfolio-6433c.firebaseapp.com",
    databaseURL: "https://myportfolio-6433c.firebaseio.com",
    projectId: "myportfolio-6433c",
    storageBucket: "myportfolio-6433c.appspot.com",
    messagingSenderId: "61730894870",
    appId: "1:61730894870:web:0d3b1811ed07eae61eb137",
    measurementId: "G-QKD8EPV11L"
});


var db =  firebaseApp.firestore();
export {db};