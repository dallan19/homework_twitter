"use strict";

const router = require("express").Router();
const tweets = require('./tweets/routes');
const users = require('./users/routes');

router.use('/tweets', tweets);
router.use('/users', users);

module.exports = router;