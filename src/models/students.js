const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    studentFirstName : {
        type : string,
        required : true,
        minlength : 3
    },
    
    collegeName : {
      type : string,
      required : true,
    },

    location : {
        type : string,
        required : true
    }
    
})

//we will create a new collection
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;