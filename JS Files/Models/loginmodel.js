const mongoose= require("mongoose")

const loginSchema=mongoose.Schema({
    email:String,
    pass:String,
    userId:String
})

const loginModel= mongoose.model("loginuser" , loginSchema)

module.exports={
    loginModel
}