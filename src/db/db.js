const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect('db url')
    .then(()=>{
        console.log('db is connected')
    });
}

module.exports = connectToDB;