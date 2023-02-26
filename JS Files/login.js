// const express= require(express)
// const { userModel } = require("./Models/usermodel")

document.getElementById("swap").addEventListener("click",(rv)=>{
    rv.preventDefault()
    // document.getElementById("data").style.backgroundColor="pink";
    document.getElementById("data").style.display="none";
    document.getElementById("login").style.display="block";  
})

document.getElementById("butn").addEventListener("click",(ec)=>{
    ec.preventDefault()
    const payload={
     name:document.getElementById("nmae").value,
     phoneNo:document.getElementById("number").value,
     email:document.getElementById("email").value,
     pass:document.getElementById("pass").value
    }
    fetch("http://localhost:2020/user/register",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(payload)
    }).then(res=> res.json())
    .then(data=> console.log(data))
    .catch(err=> console.log(err))
    swal("Sign Up successful!", " " , "success")
})

document.getElementById("secs").addEventListener("click", (er)=>{
    er.preventDefault()
    const payload={
     email:document.getElementById("emails").value,
     pass:document.getElementById("pass").value
    }
    fetch("http://localhost:2020/user/login",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(payload)
    }).then(res=> res.json())
    .then(res=> {console.log(res),  
        localStorage.setItem("token",res.token)
    window.location.assign("Home.html")
    })
    .catch(err=> console.log(err))
})



