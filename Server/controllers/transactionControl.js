const { DetailModel, TransactionModel } = require("../models/transaction");
const balanceSchema = require("../models/balance");

exports.add = async (req, res) => {
    try {
        const { userId, type, color, amount, details } = req.body;
        const amt = (type === "Income" || type === "Savings") ? amount : amount * -1;
        const oldBal = await balanceSchema.findOne({ userId: userId });
        const { balance } = await balanceSchema.findOneAndUpdate(
            { userId: userId },
            { balance: oldBal.toObject().balance + amt },
            { new: true }
        );
        const newDetails = {
            organisation: details.organisation,
            date: details.date,
            description: details.description,
            closingBalance: balance
        };

        const newTransaction = new TransactionModel({
            userId: userId,
            type: type,
            color: color,
            amount: amount,
            details: new DetailModel(newDetails)
        });
        const entry = await newTransaction.save();
        res.status(200).json({
            success: true,
            data: entry
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Some internal server error occurred!",
            error: err.message
        });
    }
}
exports.deleteTransac = async (req,res) => {
    try{
        const {id} = req.params;
        const entry = await TransactionModel.findByIdAndDelete({_id : id});
        // console.log(entry);
        const amt = (entry.type === "Income" || entry.type === "Savings") ? entry.amount : entry.amount * -1;
        // console.log(amt,entry.closingBalance);
        const updated = await balanceSchema.findOneAndUpdate({userId : entry.userId},{$inc : {balance : - amt} },{new:true});
        return res.status(200).json({
            success:true,
            message : "Deleted Succesfully!",
            data : updated
        })
    } catch (err){
        res.status(500).json({
            success: false,
            message : "Some internal server error occured!"
        })
    }
}


