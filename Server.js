require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app =  express();
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://akash:akash1234@cluster0.4ayge.mongodb.net/bookmytaxi?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("the database is connected successfully...");
}).catch(err => {
    console.log(err);
})
app.use(express.json());

app.use(cors());
app.use("/provider", require('./Route/providers'));



const port = process.env.PORT;
app.listen(port, (err)=>{
    if(err) console.log(err);
    else console.log(`server is running on port ${port} `);
})