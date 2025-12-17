const Router=require('express').Router;
const router=Router();

router.get('/',(req,res)=>{
    req.logout((err)=>{
        if(err){
            return res.send(`error occured while logging out ${err}`);
        }
        res.redirect('/login');
    })
})

module.exports=router;