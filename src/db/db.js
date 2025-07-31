const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect('mongodb+srv://saxenadevu90:y5MfvRAfx44HsDbN@cluster0.tne74x6.mongodb.net/cohortlearn')
    .then(()=>{
        console.log('db is connected')
    });
}

module.exports = connectToDB;