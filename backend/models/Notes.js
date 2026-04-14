const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    relatedQuizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz'
    },
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Notes', notesSchema);
