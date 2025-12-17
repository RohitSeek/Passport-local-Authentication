const mongoose = require('mongoose');

const db_connection = async()=> {
    try{
        const db_connection=await mongoose.connect('mongodb://localhost:27017/Passport_Auth');
        console.log('connected to db');
    }
    catch(err){
        console.log("some error occured",err);
        
    }
}

module.exports=db_connection;  //exporting the function main