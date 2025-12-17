const user=require('../models/user');
const brcypt=require('bcrypt');
const passport=require('passport');
module.exports.getSignup = (req, res) => {
    res.render('signup');
}
module.exports.postSignup = async(req, res) => {

    const {username,mail,password}=req.body;
    const existingUser=await user.findOne({username});
    console.log(existingUser);
    
    if(existingUser){
        return res.send('user already exists');
    }

    const hashedPassword=await brcypt.hash(password,10);
    const newUser=new user({
        username,
        mail,
        password:hashedPassword
    });
    await newUser.save();

        //serialize user
    req.login(newUser,(err)=>{
        if(err){
            return res.send(`error occured while serilzing ${err}`);
        }
        console.log('user is serialized');
        
        res.redirect('/dashboard');
    });
}