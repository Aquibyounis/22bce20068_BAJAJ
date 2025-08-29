const express = require("express");
const router = express.Router();
const { handlePost } = require("../controllers/bfhlController");


router.post("/", handlePost);


module.exports = router;