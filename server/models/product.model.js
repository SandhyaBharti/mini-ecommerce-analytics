import mongoose from "mongoose";

const producSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        name: {
            type: String,
            required: true,
        },
        description: String,

        category: String,

        price: Number,

        quantity: Number,

        status: {
            type: String,
            default: "active",
        },
    },
    { timestamps: true }
);

export const Product = mongoose.model("Product", producSchema);