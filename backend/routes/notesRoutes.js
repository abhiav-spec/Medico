const express = require('express');
const router = express.Router();
const { saveNote, getNotes } = require('../controllers/notesController');
const { protect } = require('../middleware/auth');

router.post('/save', protect, saveNote);
router.get('/', protect, getNotes);

module.exports = router;
