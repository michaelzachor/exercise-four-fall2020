// Create blogpost
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.send(`Create a blogpost`));

module.exports = router;