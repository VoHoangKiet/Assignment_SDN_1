const express = require('express');
const router = express.Router();

const QuestionService = require('../service/QuestionService');
const questionService = new QuestionService();

router.post('/:id/questions', async (req, res) => {
  try {
    const quizId = req.params.id;
    const question = await questionService.createQuestion(quizId, req.body);
    res.status(201).json(question);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.get('/:quizId/questions', async (req, res) => {
  try {
    const quiz = await questionService.getAllQuestionByQuizzId(req.params.id);
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:quizId/questions/:id', async (req, res) => {
  try {
    const quiz = await questionService.getQuestionById(req.params.id);
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;