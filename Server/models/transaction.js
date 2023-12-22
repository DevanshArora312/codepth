const mongoose = require("mongoose")

const detailSchema = mongoose.Schema(
    {
        organisation : {
            type : String,
            required : true
        },
        date :{
            type : Date,
            required : true
        },
        closingBalance :{
            type : Number,
            required : true
        },
        description : {
            type : String,
            required : true
        }
    }
)

const transactionSchema = new mongoose.Schema(
    {
        userId : {
            type : String ,
            required : true
        },
        type : {
            type : String,
            required : true
        },
        color : {
            type : String,
            required : true
        },
        amount : {
            type : Number,
            required : true
        },
        details : {
            type : detailSchema,
            required : true
        }
    }
)

const DetailModel = mongoose.model("Detail", detailSchema);
const TransactionModel = mongoose.model("Transaction", transactionSchema);

module.exports = { DetailModel, TransactionModel };