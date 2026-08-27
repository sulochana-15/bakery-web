const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        customerName: {
            type: String,
            required: true
        },

        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },

        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },

        comment: {
            type: String,
            required: true
        }
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model("Review", reviewSchema);