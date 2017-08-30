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

var db = firebase.database();

$('.signup').on('click', function (event) {

    event.preventDefault();

    var trainName = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();


    var firstTrain = moment($("#firstTrain").val().trim(), "HH:mm").subtract(10, "years").format("x");
    var frequency = $("#frequency").val().trim();


    var timeNow = moment();
    console.log("The time right now is" + moment(timeNow).format("hh:mm"));

    var testDB = {
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    };

    console.log(trainName, destination, firstTrain, frequency);

    var database = db.ref("TrainSchedule");

    database.push(testDB)

});