const mongoose = require('mongoose');

const dbconnect =async()=>{
    await mongoose.connect("mongodb://localhost:27017movei")
    console.log('Mongodb connect!!');
}

module.exports = dbconnect;

