const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3

    },
    email: {
        type: String,
        require: true,
        unique: [true, "Email is already exist"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    phone: {
        type: Number,
        require: true,
        unique: [true, "phone no. is alrady exist"]

    },
    address: {
        type: String,
        require: true,
    }
});

// we will create a new collection
const student = new mongoose.model("student", studentSchema)
module.exports = student;