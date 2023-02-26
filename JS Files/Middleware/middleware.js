const express = require("express")
const jwt = require("jsonwebtoken")

const authentication=(req,res,next)=>{
    const token= req.headers.authorization
    if(token){
        jwt.verify(token, 'imran', (err, decoded)=> {
            if(decoded){
                req.body.user=decoded.userId
                console.log(decoded)
                next()
            }   
            else{
                res.end("Please login first")
            }
          });
    }
    else{
        res.send("Login first")
    }
}

module.exports={
    authentication
}