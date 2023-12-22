const mongoose = require("mongoose")

const balanceSchema = new mongoose.Schema(
    {
        balance : {
            type : Number,
            required : true
        },
        userId : {
            type : String,
            required : true
        }
    }
)

module.exports = mongoose.model("balance",balanceSchema);