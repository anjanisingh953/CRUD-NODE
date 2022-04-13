const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://deepakdangi:TechAdmin@cluster0.gbhy0.mongodb.net/student?retryWrites=true&w=majority").then(() => {
    console.log("connected");
}).catch((err) => {
    console.log("Error", err)
})