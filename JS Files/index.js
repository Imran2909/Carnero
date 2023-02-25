const express = require("express")
const { connection } = require("./db")
const { userRoute } = require("./Routes/userroutes")
const cors= require("cors")
const app = express()
app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Home page")
})

app.use("/user", userRoute)
app.use(cors())

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
