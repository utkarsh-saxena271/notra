const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log('db is connected')
    });
}

module.exports = connectToDB;