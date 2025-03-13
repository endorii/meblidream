const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const authRouter = require("./routes/auth.routes");
const orderRoutes = require("./routes/order.routes");
const categoryRoutes = require("./routes/category.routes");
const uploadRoutes = require("./routes/upload.routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(cookieParser());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/auth", authRouter);
app.use("/api/", orderRoutes);
app.use("/api/", categoryRoutes);
app.use("/api/", uploadRoutes);

const start = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected to MongoDB");

        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`);
        });
    } catch (e) {
        console.error("Error connecting to MongoDB:", e.message);
        process.exit(1);
    }
};

// Обробка критичних помилок
process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
    process.exit(1);
});

start();
