const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/db");
const cors = require("cors");
const transactionRoutes = require("./routes/transactionRoutes")
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1",transactionRoutes);

app.get("/",(req,res) => {
    res.send("<h1> Hemllo guymz </h1>");
})

app.listen(process.env.PORT, () => {
    console.log("Server started at port",process.env.PORT);
})

dbConnect();