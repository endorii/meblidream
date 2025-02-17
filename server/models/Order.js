const { Schema, model } = require("mongoose");

const Order = new Schema(
    {
        theme: {
            type: String,
            required: true,
        },
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
