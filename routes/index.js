// Show all blogposts
const express = require('express');

const router = express.Router();

// Require Firebase
const firebase = require("firebase");

// Initialize Firestore Database
const db = firebase.firestore();

// Reference a specific collection
const blogposts = db.collection("blogposts");

router.get('/', (req, res) => {
    // res.send(`Show all blogposts`)
    // We can do anything in here, just return at the end
    const blogpostsArray = [];
    blogposts
    .get()
    .then((querySnapshot) => {
        // Loop through query snapshot and push into array
        querySnapshot.forEach(doc => {
            blogpostsArray.push(doc.data())
        })
        // return array
        return res.send(blogpostsArray);
    }).catch(function(e) {
        console.warn('error:', e);
        return res.send(e);
    });
});

module.exports = router;