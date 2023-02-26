const express = require("express")
const { connection } = require("./db")
const { userRoute } = require("./Routes/userroutes")
const { productroute } = require("./Routes/productroute")
const { cartRoute } = require("./Routes/cartroute")
const { authentication } = require("./Middleware/middleware")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Home page")
})

app.use("/prod", productroute)

app.use("/cartes" , cartRoute)
app.use("/user", userRoute)
app.use(authentication)


app.listen(2020, async () => {
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
        res.send(error)
    }
    console.log("Server is running at port 2020")
})
