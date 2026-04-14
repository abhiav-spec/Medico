const Quiz = require('../models/Quiz');
const { generateMedicalQuiz } = require('../services/aiService');

// @desc    Generate a new quiz
// @route   POST /api/quiz/generate
exports.generateQuiz = async (req, res) => {
    const { organ, difficulty } = req.body;

    try {
        const questions = await generateMedicalQuiz(organ, difficulty);
        
        res.status(200).json({
            success: true,
            organ,
            difficulty,
            questions
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc    Submit a quiz and save results
// @route   POST /api/quiz/submit
exports.submitQuiz = async (req, res) => {
    const { organ, difficulty, questions, score } = req.body;

    try {
        const quiz = await Quiz.create({
            userId: req.user.id,
            organ,
            difficulty,
            questions,
            score,
            totalQuestions: questions.length
        });

        res.status(201).json({
            success: true,
            quiz
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc    Get user quiz history
// @route   GET /api/quiz/history
exports.getHistory = async (req, res) => {
    try {
        const history = await Quiz.find({ userId: req.user.id }).sort('-createdAt');
        res.status(200).json({
            success: true,
            count: history.length,
            history
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
