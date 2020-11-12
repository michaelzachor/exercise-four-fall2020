// Query one blogpost
const express = require('express');
const router = express.Router();

// SET UP FIREBASE ON THIS PAGE
// 1. Require Firebase
const firebase = require("firebase");
// 2. Initialize Firestore Database
const db = firebase.firestore();
// 3. Reference a specific collection
const blogposts = db.collection("blogposts");

//if no id provided
router.get("/", (req, res) => res.send("No id provided"));
//get a post by ID
router.get('/:id', (req, res) => {
    console.log(req);
    //get the query parameter from the url and set it to a variable
    // this is the id they gave us at firestore
    const queryId = req.params.id;
    // query the collection
    blogposts
    .doc(queryId)
    .get()
    .then(function(doc) {
        if (doc.exists) {
            const data = doc.data(); //document data (author, text, title)
            console.log(data);
            return res.send(data); // send data to the user who queries
        } else {
            return res.send("no doc exists");
        }
    })
    .catch(function(error) {
        return res.send(error);
    });
});
    

module.exports = router;
