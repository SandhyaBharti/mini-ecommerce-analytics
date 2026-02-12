import mongoose, { Schema } from "mongoose";

const feedbackSchema = new mongoose.Schema(
    {
        userId: {
            type: momgoose.Schema.Types.ObjectId,
            ref: "User",
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
        message: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
        },
    }, 
    { timestamps: true }
);

export const Feedback = mongoose.model("Feedback", feedbackSchema);