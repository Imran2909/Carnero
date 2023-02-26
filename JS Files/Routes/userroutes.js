const express = require("express")
const { userModel } = require("../Models/usermodel")
const { loginModel } = require("../Models/loginmodel")
const bcrypt = require("bcrypt")
const userRoute = express.Router()
// userRoute.use(express.json())
const jwt = require("jsonwebtoken")

userRoute.post("/register", async (req, res) => {
    const { name, phoneNo, email, pass } = req.body
    try {
        bcrypt.hash(pass, 3, async (err, hash) => {
            if (err) {
                res.send(err)
            }
            else {
                const users = new userModel({ name, phoneNo, email, pass: hash })
                await users.save()
                res.send("New user registered")
            }
        });
    } catch (error) {
        res.send({ "msg": "something went wrong", "error": error })
    }
})

userRoute.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const usr = await userModel.find({ email })
        if (usr.length > 0) {
            bcrypt.compare(pass, usr[0].pass, async(err, result) => {
                if (err) res.end(err)
                else if (result) {
                    const token = jwt.sign({ userId: usr[0]._id }, 'imran')
                    // console.log(usr[0]._id)
                    res.send({ "msg": "User logged in successful", "token": token})
                }
            });
        }
        else {
            res.send("something went wrong")
        }
    } catch (error) {
        res.send(error)
    }
})

module.exports = {
    userRoute
}
