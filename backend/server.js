const express = require("express"); //using the json file dependencies(node_modules)
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

//declare a constant variable
const app = express();
//require  for read variables(MONGODB_URL)
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

//database link
const URL = process.env.MONGODB_URL;

const PORT = process.env.PORT || 8070;
//create mongo configurations

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


const connectio = mongoose.connection;
connectio.once("open",()=>{
    console.log("mongoDB connection successful !!!");
})

//Food
const foodRouter = require("./routes/FoodRoute.js");
app.use("/food",foodRouter);


//run the app using port
app.listen(PORT, () =>{
    console.log(`Server is up and running on port number: ${PORT}`);

})
