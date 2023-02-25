const mongoose= require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    phoneNo:Number,
    email:String,
    pass:String
})

const userModel= mongoose.model("user" , userSchema)

module.exports={
    userModel
}