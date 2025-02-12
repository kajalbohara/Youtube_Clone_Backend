import express from "express"
import dotenv from "dotenv"
dotenv.config();
import "../config/Connection.js"

const app = express();
const port = process.env.PORT || 7000;



// added home route
app.get("/", (req, res) => {
    res.send("welcome to Youtube_Clone backend")
})

// server running at port 
app.listen(port, () => {
    console.log(`listening at port ${port}`)
})