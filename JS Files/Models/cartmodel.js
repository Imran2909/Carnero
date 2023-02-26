const mongoose= require("mongoose")

const cartSchema=mongoose.Schema({
    title:String,
    image:String,
    specification:String,
    qty:String,
    price:String,
    user:String
})

const cartModel= mongoose.model("cart" , cartSchema)

module.exports={
    cartModel
}