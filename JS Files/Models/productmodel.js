const mongoose= require("mongoose")

const productSchema=mongoose.Schema({
    title:String,
    image:String,
    specification:String,
    qty:String,
    price:String
})

const productModel= mongoose.model("product" , productSchema)

module.exports={
    productModel
}