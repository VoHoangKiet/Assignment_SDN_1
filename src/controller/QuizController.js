const express = require('express');
const router = express.Router();

const QuizService = require('../service/QuizService');
const quizService = new QuizService();

router.post('/', async (req, res) => {
  try {
    const quiz = await quizService.createQuiz(req.body);
    res.status(201).json(quiz);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const quizzes = await quizService.getAllQuizzesPopulate();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const quizz = await quizService.getQuizById(req.params.id);
    if (!quizz) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(quizz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const quiz = await quizService.updateQuiz(req.params.id, req.body);
    res.json(quiz);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await quizService.deleteQuiz(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;