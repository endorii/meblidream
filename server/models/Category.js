const { Schema, model } = require("mongoose");

const Category = new Schema(
    {
        displayName: {
            type: String,
            required: true,
        },
        pathName: {
            type: String,
            required: true,
        },
        filling: {
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
        },
        images: [
            {
                type: String,
                required: true,
            },
        ],
    },
    { timestamps: true }
);

module.exports = model("Category", Category);
