// Create blogpost
const express = require('express');
const router = express.Router();

// SET UP FIREBASE ON THIS PAGE
// 1. Require Firebase
const firebase = require("firebase");
// 2. Initialize Firestore Database
const db = firebase.firestore();
// 3. Reference a specific collection
const blogposts = db.collection("blogposts");


//we can send HTML as a variable
// const form = "<h1>Create a Blogpost</h1><p>Cool paragraph</p>";
// action is "once submitted, where do we send the data"
const form = `
    <form action="/create/submit">
        <input type="text" name="title" placeholder="Title of Post" />
        <input type="text" name="text" placeholder="Text of Post" />
        <input type="text" name="author" placeholder="Author of Post" />
        <button type="submit">Submit Post</button>
    </form`;
//default route serves from
router.get('/', (req, res) => res.send(form));
//so when you open up /create you are sent the html of this form, which renders inside the browser
//route for submitting the form

//access queryParams on the req object
router.get("/submit", (req, res) => {
    const queryParams = req.query; // ?title=ourTitle&text=ourText&author=ourAuthor // outputs: {title: 'words'}, etc.
    //custom IDs for our posts
    // let's make our posts a single spaceless string. (replace space with -)
    // if two posts with the same title, it just updates the first one
    // but you could do if (idFromTitle exists) {add -01}
    const idFromTitle = queryParams.title.replace(/\s+/g, "-").toLowerCase();
    blogposts
    .doc(idFromTitle) //put a string in here and it's a customm id
    //set queryParam values on our blogposts collection
    //so you send the values you typed and see if it works
    // and then it should show up in Firestore
    .set(queryParams) 
    .then(function(doc) {
        res.send("Successful submission")
    })
    .catch(function (error) {
        console.log('error', error);
        res.send("Failed submission")
    })
});
module.exports = router;