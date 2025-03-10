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
                required: false,
            },
            subtitle: {
                type: String,
                required: false,
            },
            description: {
                type: String,
                required: false,
            },
        },
        previewImage: {
            type: String,
            required: false,
        },
        bgImage: {
            type: String,
            required: false,
        },
        images: [
            {
                type: String,
                required: false,
            },
        ],
    },
    { timestamps: true }
);

module.exports = model("Category", Category);
