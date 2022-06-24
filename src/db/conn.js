const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api", {
    useCreateIndex: true,
    UseNewUrlParser: true,
    UseUnifiedTopology: true
}).then(() => {
    console.log("Connection is successful");
}).catch((e) => {
    console.log("No connection");
})