const {TransactionModel} = require("../models/transaction");

exports.getAll = async (req,res) => {
    try {
        const response = await TransactionModel.find({});
        return res.status(200).json(
            {
                success : true,
                data : response
            }
        )
    } catch (err) {
        console.log(err.message)
        return res.status(500).json(
            {
                success : false,
                message : "Server error occured!"

            }
        )
    }
}

exports.getOne = async (req,res) => {
    try {
        const {id} = req.params;
        const response = await TransactionModel.findById({_id : id});
        return res.status(200).json(
            {
                success : true,
                data : response
            }
        )
    } catch (err) {
        return res.status(500).json(
            {
                success : false,
                message : "Server error occured!"
            }
        )
    }
}
