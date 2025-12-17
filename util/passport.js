const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;

const User=require('../models/user');
const brcypt=require('bcrypt')
const isValidPassword=(userPassword,password)=>{

    return brcypt.compare(password,userPassword);
}
passport.use(new LocalStrategy(
    async function (username,password,done){
        console.log(username,password);
        
        const user=await User.findOne({username});
        console.log(user);
        
        if(!user){
            return done(null,false,{message:'Incorrect username'});
        }
        const validPassword= await isValidPassword(user.password,password);
        if(!validPassword){
            return done(null,false,{message:'Incorrect password'});
        }
        return done(null,user);
    } 
))

passport.serializeUser((user, done) => {
    done(null, user._id); // Store the user's ID in the session
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id); // Fetch user by ID
    done(null, user); // Attach user to req.user
});