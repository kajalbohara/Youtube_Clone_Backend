import express from "express"
import dotenv from "dotenv"
dotenv.config();
import "./config/Connection.js"
import userRoutes from "./routes/userRoutes.js"
import channelRoutes from "./routes/channelRoutes.js"
import videoRoutes from "./routes/videoRoutes.js"
import commentRoutes from "./routes/commentRoutes.js"
import cors from "cors"
const app = express();
const port = process.env.PORT || 7000;

// middleware usage
app.use(cors())
app.use(express.json());
app.use("/api/users", userRoutes)
app.use("/api/channel", channelRoutes)
app.use("/api/video", videoRoutes)
app.use("/api/comment", commentRoutes)


// added home route
app.get("/", (req, res) => {
    res.send("welcome to Youtube_Clone backend")
})

// server running at port 
app.listen(port, () => {
    console.log(`listening at port ${port}`)
})