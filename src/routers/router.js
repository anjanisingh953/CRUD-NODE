const express = require("express")
const router = new express.Router()
const student = require("../models/students")
router.get("/students", async (req, res) => {
    try {
        const studentData = await student.find()
        res.status(200).send(studentData)
    } catch (error) {
        res.status(404).send(error)
    }
})

/*---------------post request using promises------------------*/
// router.post("/students", (req, res) => {
//     const user = new student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((err) => {
//         res.status(400).send(err)
//     })
// })

/*---------------post request using async await------------------*/

router.post("/students", async (req, res) => {
    try {
        const user = new student(req.body)
        const createUser = await user.save();
        res.status(201).send(createUser)
    } catch (error) {
        res.status(400).send(error)
    }
})

/*---------------get request from using async await------------------*/
router.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await student.findById(_id) // instead of {_id:_id} we are using _id because both(key and value) are same.
        if (!studentData) {
            res.status(404).send("data not found")
        } else {
            res.status(200).send(studentData)
        }
    } catch (error) {
        res.status(400).send(error)
    }
})
/*-------------patch request using async awit-----------------------*/
router.put("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateUser = await student.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(200).send(updateUser)
    } catch (error) {
        res.status(401).send(error)
    }
})

/*-------------delete request using async awit-----------------------*/
router.delete("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteUser = await student.findByIdAndDelete(_id);
        res.status(200).send(deleteUser)
    } catch (error) {
        res.status(401).send(error)
    }
})
module.exports = router;