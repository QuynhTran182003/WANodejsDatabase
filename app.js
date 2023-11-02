const express = require('express');
const mysql = require('mysql');

const path = require('path');
// const session = require('express-session');

const dotenv = require('dotenv');
dotenv.config({ path: './.env'});

const app = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
});

// __dirname the actual file where u are at the moment
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

// Parse url encoded sent by html form
app.use(express.urlencoded({extended: false}));
// parse json body sent by client
app.use(express.json());

app.set('view engine', 'hbs');

// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }
//   }));
db.connect((error)=>{
    if(error){
        console.log(error);
    } else{
        console.log("MySQL connected");
    }
})

// defines routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(3001, () =>{
    console.log("Server is running on port: 3001")
})