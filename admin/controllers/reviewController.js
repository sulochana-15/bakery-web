const Review = require("../models/Review");


// Get reviews
const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
            .populate("productId", "name")
            .sort({ createdAt: -1 });

        res.json(reviews);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Add review
const addReview = async (req, res) => {
    try {
        const review = await Review.create(req.body);

        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


// Delete review
const deleteReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(
            req.params.id
        );

        if (!review) {
            return res.status(404).json({
                message: "Review not found"
            });
        }

        res.json({
            message: "Review deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {
    getReviews,
    addReview,
    deleteReview
};