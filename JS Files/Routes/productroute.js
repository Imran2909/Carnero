const express = require("express")
const {productModel} = require("../Models/productmodel")

const productroute= express.Router()
productroute.use(express.json())

productroute.post("/add",async(req,res)=>{
    // const {name,image,specification,qty,price,userID}= req.body
    const payload= req.body
    try {
        const newd= new productModel(payload)
        await newd.save()
        res.send("Product added")
    } catch (error) {
        res.send(error)
    }
})

productroute.get("/all",async(req,res)=>{
    try {
    const data= await productModel.find()
    res.send(data)
    } catch (error) {
        res.send(error)
    }
})

productroute.get("/asce",async(req,res)=>{
    try {
    const data= await productModel.find().sort({price: -1})
    res.send(data)
    } catch (error) {
        res.send(error)
    }
})

productroute.get("/desc",async(req,res)=>{
    try {
    const data= await productModel.find().sort({price: 1})
    res.send(data)
    } catch (error) {
        res.send(error)
    }
})


productroute.get("/search/:id",async(req,res)=>{
    const ID= req.params.id
    try {
       const data= await productModel.find({title:{$regex:`${ID}`}})
    res.send(data)
    } catch (error) {   
        res.send(error)
    }
})


module.exports={
    productroute
}