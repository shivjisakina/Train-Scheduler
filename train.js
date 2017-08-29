// Initialize Firebase
var config = {
    apiKey: "AIzaSyD2R5a0olG912Szr93ww1HgY83RDBztdOI",
    authDomain: "train-schedular-8cda5.firebaseapp.com",
    databaseURL: "https://train-schedular-8cda5.firebaseio.com",
    projectId: "train-schedular-8cda5",
    storageBucket: "",
    messagingSenderId: "998004862453"
};
firebase.initializeApp(config);

var auth = firebase.auth();

var db = firebase.database();