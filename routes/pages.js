const express = require('express');

const router = express.Router();
router.get('/', (req, res) =>{
    // res.send("<h1>Homepage</h1>")
    res.render('signin');
})

router.get("/signup", (req, res) =>{
    // res.send("<h1>Homepage</h1>")
    res.render('signup');
})

// router.get('*', (req,res) =>{
//     res.render('signin');
// })
module.exports = router;