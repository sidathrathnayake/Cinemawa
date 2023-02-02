const mongoose = require('mongoose');

const ConnectDB = async () => {
    await mongoose.connect(
        process.env.MONGODB_URI,
        err => {
            if(err){
                throw err;
            }
            else{
                console.log("@@@@@@@@@@@@@@@@@@ Connected to Database");
            }
        }
    )
}

module.exports = ConnectDB;