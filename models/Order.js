const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        customerName: {
            type: String,
            required: true
        },

        customerEmail: {
            type: String,
            required: true
        },

        products: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product"
                },

                name: String,

                quantity: {
                    type: Number,
                    default: 1
                },

                price: Number
            }
        ],

        totalAmount: {
            type: Number,
            required: true
        },

        address: {
            type: String,
            required: true
        },

        paymentMethod: {
            type: String,
            default: "Cash on Delivery"
        },

        status: {
            type: String,
            enum: [
                "Pending",
                "Processing",
                "Delivered",
                "Cancelled"
            ],
            default: "Pending"
        }
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model("Order", orderSchema);