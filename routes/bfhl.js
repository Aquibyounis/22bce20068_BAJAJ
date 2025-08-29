const express = require("express");
const router = express.Router();
const { handlePost } = require("../controllers/bfhlController");


router.post("/", handlePost);
router.get("/",(req,res)=> {
    console.log("BFHL route is working");
    res.json({ message: "✅ BFHL route is working" });
});


module.exports = router;