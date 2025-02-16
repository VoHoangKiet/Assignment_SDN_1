const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
    score: {
        type: Number,
        required: true,
    },
    answers: [{
        questionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Question", 
            required: true
        },
        userAnswer: {
            type: [Number],
            required: true
        },
        isCorrect: {
            type: Boolean,
            required: true
        }
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
    },
});

module.exports = mongoose.model("Test", TestSchema);