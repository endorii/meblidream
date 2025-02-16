const { Schema, model } = require("mongoose");

const Order = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

module.exports = model("Order", Order);
