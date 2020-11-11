const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

// Configuration Values for Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCMffPETdMpU42H0eyRh5z-uc3q3YEesIw",
    authDomain: "exercise-four-fall2020-5a6dc.firebaseapp.com",
    databaseURL: "https://exercise-four-fall2020-5a6dc.firebaseio.com",
    projectId: "exercise-four-fall2020-5a6dc",
    storageBucket: "exercise-four-fall2020-5a6dc.appspot.com",
    messagingSenderId: "496818769575",
    appId: "1:496818769575:web:1459b715e2e7c608081582"
};


// Firebase
const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

// Routes Import
const indexRoute = require(`./routes/index.js`);
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/createBlogpost.js");
app.use('/', indexRoute);
app.use('/post', postRoute);
app.use('/create', createRoute);

app.listen(port, () => 
    console.log(`Exercise Four is running at localhost:${port}`)
); 