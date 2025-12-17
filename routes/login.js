const passport=require('passport')
const router = require('express').Router();
const loginController = require('../controllers/loginController');
router.route("/")
.get(loginController.getlogin)
.post(passport.authenticate('local'),loginController.postlogin);

module.exports=router;
