const express=require('express');
const session = require('express-session');
const mongoDBStore=require('connect-mongodb-session')(session);
const app=express();
const port=3000;

const signup=require('./routes/signup');
const login=require('./routes/login');
const logout=require('./routes/logout'); 
const dashboard=require('./routes/dashboard');

const {sessionConnection,isAuthenticate}=require('./util/session');
const passportUtil=require('./util/passport');
const dbConnection=require('./util/dbConnection');

const mongoose=require('mongoose');
const passport=require('passport'); 

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(sessionConnection);
app.use(passport.initialize());
app.use(passport.session());


app.listen(port,()=>{
    console.log('server is running on port 3000');
})
//db connection
dbConnection();

app.get('/',(req,res)=>{
    res.send(`<a href="/signup">signup</a> <a href="/login">login</a> <a href="/dashboard">dashboard</a>`);
})

app.use('/signup',signup);
app.use('/login',login);

app.use('/logout',logout);
app.use('/dashboard',isAuthenticate,dashboard);