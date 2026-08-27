const Order = require("../models/Order");


// Get all orders
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .sort({ createdAt: -1 });

        res.json(orders);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Create order
const createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);

        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


// Update order status
const updateOrderStatus = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            {
                status: req.body.status
            },
            {
                new: true
            }
        );

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.json(order);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


// Delete order
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(
            req.params.id
        );

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.json({
            message: "Order deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {
    getOrders,
    createOrder,
    updateOrderStatus,
    deleteOrder
};