const express = require('express');
const session = require('express-session');
const router = express.Router();

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));
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