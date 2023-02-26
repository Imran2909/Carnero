const express = require("express")
const { cartModel } = require("../Models/cartmodel")

const cartRoute = express.Router()
// cartRoute.use(express.json())

cartRoute.post("/adcart", async (req, res) => {
    const payload = req.body
    try {
        const data = new cartModel(payload)
        await data.save()
        res.end("Added to cart")
    } catch (error) {
        console.log(error)
        res.end(error)
    }
})

cartRoute.get("/all", async (req, res) => {
    try {
        const data = await cartModel.find()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

cartRoute.post("/items",async(req,res)=>{
    const payload= req.body
    try {
        const data = await cartModel.find(payload)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})


module.exports = {
    cartRoute
}
