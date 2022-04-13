const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/connection");
const router = require("./routers/router");

app.use(express.json()); //send response in json format

app.use(router)

let port = 3000;
app.listen(port, () => {
    console.log(`server is started at port ${port}`)
})



