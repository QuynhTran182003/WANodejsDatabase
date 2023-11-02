
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
});

exports.signup = (req, res) => 
{
    const {username, email, password, repeatPassword} = req.body
    db.query('SELECT email FROM user WHERE email = ?', [email], async (error, result) => {
        if (error){
            console.log(error);
        }

        if (result.length > 0){
            return res.render('signup', {message: 'Email already exists.'});
        } else if(password !== repeatPassword){
            return res.render('signup', {message: 'Passwords dont match'});
        }

        // let hashedPassword = await bcrypt.hash(password,8);
        // console.log(hashedPassword);    

        db.query('INSERT INTO user SET ?', {name: username, email: email, password: password}, (error, result) =>{
            if (error){
                console.log(error);
            } else{
                console.log(result);
                return res.render('signup', {message: 'User has been registered'});
                
            }
        })
    })

}

exports.signin = (req, res) => {
    const {username, password} = req.body;
    db.query('SELECT password FROM user WHERE password = ? and name = ?', [password, username], (error, result) =>{
        if (error){
            console.log(error);
        } else{
            if (result.length > 0){
                return res.render('index',{username: req.body.username});
            }
        }
    })
    // console.log(username, password);
    // res.render('index');
}