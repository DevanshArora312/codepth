const express = require("express")
const router = express.Router();
const {add,deleteTransac} = require("../controllers/transactionControl");
const {getOne,getAll} = require("../controllers/getTransaction");

router.get("/getTransaction",getAll);
router.get("/getTransaction/:id",getOne);

router.post("/addTransaction",add);
router.delete("/deleteTransaction/:id",deleteTransac);

module.exports = router;