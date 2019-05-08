const express = require("express");
const path = require("path");
const firebase = require("firebase");

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyA-IzT4VjDPQp5QRXgcmz20fFCX64f6-FU",
  authDomain: "qr-app-86a57.firebaseapp.com",
  databaseURL: "https://qr-app-86a57.firebaseio.com",
  projectId: "qr-app-86a57",
  storageBucket: "qr-app-86a57.appspot.com",
  messagingSenderId: "1038104150104"
});

const app = express();

app.use(express.static(path.join(__dirname, "../build")));

app.get("/api/firebase/tasks", (req, res) => {
  firebase
    .database()
    .ref("/tasks")
    .on("value", snapshot => res.json(snapshot.val()), err => console.log(err));
});

const tasks = [
  {
    id: 345,
    title: "My third task",
    description: "Something to do"
  },
  {
    id: 456,
    title: "My fourth task",
    description: "Something to do"
  }
];

app.get("/api/tasks", (_, res) => {
  res.send(tasks);
});

//app.get("*", (req, res) => {
//  res.sendFile(path.join(__dirname, "../build", "index.html"));
//});

app.listen(9000);
