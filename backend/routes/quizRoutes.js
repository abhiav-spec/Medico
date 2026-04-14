const express = require('express');
const router = express.Router();
const { generateQuiz, submitQuiz, getHistory } = require('../controllers/quizController');
const { protect } = require('../middleware/auth');

router.post('/generate', protect, generateQuiz);
router.post('/submit', protect, submitQuiz);
router.get('/history', protect, getHistory);

module.exports = router;
