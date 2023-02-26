let login= document.getElementById("name")
   login.addEventListener("click",()=>{
    swal("Please login/Signup first!", " ", "warning");
    window.location.assign("Login.html")
   })

   document.body.addEventListener("click", async(re)=>{
    re.preventDefault()
    await swal("Please login/Signup first!", " ", "warning");
    window.location.assign("Login.html")
   })



