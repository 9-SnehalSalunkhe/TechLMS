import express from "express"
import dotenv  from "dotenv";
import cookieParser  from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.route.js";

dotenv.config({});
import connectDB from "./database/db.js";

// db connection here 
connectDB();
const app = express();
const PORT = process.env.PORT || 3030;


// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:8080",
    credentials: true

}));

// APIS 
app.use("/api/v1/user", userRoute);

app.get("/home", (_,res)=> {
    res.status(200).json({
        success: true,
        message: " hello its coming from backend"
    })
})



app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);

})