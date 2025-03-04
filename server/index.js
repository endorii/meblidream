const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = config.get("PORT");
const cors = require("cors");
const path = require("path");

const authRouter = require("../server/routes/auth.routes");
const orderRoutes = require("./routes/order.routes");
const categoryRoutes = require("./routes/category.routes");
const uploadRoutes = require("./routes/upload.routes");

app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/auth", authRouter);
app.use("/api/", orderRoutes);
app.use("/api/", categoryRoutes);
app.use("/api/", uploadRoutes);

const start = async () => {
    try {
        mongoose.connect(config.get("DBURL"));

        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
