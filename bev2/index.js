import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";


const app = express();
mongoose.connect("mongodb://localhost:27017/crud_db", { 
    useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Connected to MongoDB");
});
app.use(cors());
app.use(express.json());
app.use(ProductRoute);

app.listen(5000, () => console.log("Server started on port 5000"));