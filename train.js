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
    var firstTrain = $("#firstTrain").val().trim();
    var frequency = $("#frequency").val().trim();

    var timeNow = moment();
    console.log("The time right now is " + moment(timeNow).format("hh:mm"));

    //First Train Time
    var firstTime = moment(firstTrain ,"hh:mm").subtract(1, "years");

    // Time Difference
    var timeDifference = moment().diff(moment(firstTime), "minutes");
    console.log("The difference in time is: " + timeDifference);

    // The time the trains are apart
    var timeApart = timeDifference % frequency;
    console.log("time remaining: " + timeApart);

    //Minutes till Train
    var minutesTillTrain = frequency - timeApart;
    console.log("Minutes till the Train: " + minutesTillTrain);

    var nextTrain = moment().add(minutesTillTrain, "minutes");
    console.log("Next train is arriving in: " + moment(nextTrain).format("hh:mm"));


    var testDB = {
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        minutesTillTrain: minutesTillTrain
    };

    console.log(trainName, destination, firstTrain, frequency, minutesTillTrain);

    var database = db.ref("TrainSchedule");

    database.push(testDB)

});