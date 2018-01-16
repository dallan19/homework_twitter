"use strict";

const router = require("express").Router();
const tweetsRoutes = require("./routes/tweets");

router.use("/tweets", tweetsRoutes);

module.exports = router;