import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted:{
        type: Boolean,
        default: false,
    },

    user:{//to know which user created task
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
  
    createdAt:{ // well now when user created
        type:Date,
        default: Date.now,
    },
});

export const Task = mongoose.model("Task" , schema);
