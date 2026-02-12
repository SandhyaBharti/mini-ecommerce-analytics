import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        
        entityId: mongoose.Schema.Types.ObjectId,

        actiion: String,

        timestamp: {
            type: Date,
            default: Date.now,
        },
    },
);

export const Activity = mongoose.model("Activity", activitySchema);