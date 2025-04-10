import express from "express"
import dotenv  from "dotenv";
dotenv.config({});
import connectDB from "./database/db.js";

// db connection here 
connectDB();
const app = express();
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);

})