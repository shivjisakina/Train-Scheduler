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

$('.signup').on('click', function (event) {

    event.preventDefault()

    var trainName = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = $("#firstTrain").val().trim();
    var frequency = $("#frequency").val().trim();

    console.log(trainName, destination, firstTrain, frequency)

})