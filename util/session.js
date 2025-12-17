const session=require('express-session');
const mongoDBStore=require('connect-mongodb-session')(session);
const store= new mongoDBStore({
    uri:'mongodb://localhost:27017/Passport_Auth',
    collection:'mySessions'
})

const sessionInfo={
    secret:"mysecret",
    resave:false,
    saveUninitialized:false,
    store:store
}

const isAuth=(req,res,next)=>{ //middleware to check if user is authenticated
    
    if(req.isAuthenticated()){
        next();
    }
    else{
        res.redirect('/login');
    }
}
const sessionConnection=session(sessionInfo);

module.exports={sessionConnection,isAuthenticate:isAuth};