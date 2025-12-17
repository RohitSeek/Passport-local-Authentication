console.log("signup");

const router = require('express').Router();
const signupController = require('../controllers/signupController');
router.route("/")
.get(signupController.getSignup)
.post(signupController.postSignup);

module.exports=router;
