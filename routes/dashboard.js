 
const router = require('express').Router();
const passport=require("passport")

const dashboardController = require('../controllers/dashboardController');
router.route("/")
.get(dashboardController.getDashboard)

module.exports=router;
