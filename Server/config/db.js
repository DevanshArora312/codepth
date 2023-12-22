const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DB_URL,{})
    .then(() => {
        console.log("Connected to db Succesfully!");
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = dbConnect;