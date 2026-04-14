const Notes = require('../models/Notes');

// @desc    Save a new note
// @route   POST /api/notes/save
exports.saveNote = async (req, res) => {
    const { content, title, relatedQuizId } = req.body;

    try {
        const note = await Notes.create({
            userId: req.user.id,
            title,
            content,
            relatedQuizId
        });

        res.status(201).json({
            success: true,
            note
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc    Get all user notes
// @route   GET /api/notes
exports.getNotes = async (req, res) => {
    try {
        const notes = await Notes.find({ userId: req.user.id }).sort('-createdAt');
        res.status(200).json({
            success: true,
            count: notes.length,
            notes
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
