const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = config.get("PORT");
const cors = require("cors");

const callRoutes = require("./routes/call.routes");

app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/api/", callRoutes);

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
