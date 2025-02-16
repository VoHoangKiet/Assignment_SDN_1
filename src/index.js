const express = require('express');
const mongoose = require('mongoose');
const quizController = require('./controller/QuizController');
const questionController = require('./controller/QuestionController');
const userController = require('./controller/UserController');
const testController = require('./controller/TestController');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/SimpleQuiz')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB', err));

app.use(express.json());

app.use('/quizzes', quizController);
app.use('/quizzes', questionController);
app.use('/users', userController);
app.use('/tests', testController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});