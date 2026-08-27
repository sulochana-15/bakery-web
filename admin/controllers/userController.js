const User = require("../models/User");


// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");

        res.json(users);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Add user
const addUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({
            message: "User created successfully",
            user
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


// Delete user
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(
            req.params.id
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {
    getUsers,
    addUser,
    deleteUser
};