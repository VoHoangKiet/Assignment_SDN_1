const Quiz = require('../model/Quiz');

class QuizService {

    getAllQuizzes() {
        return Quiz.find();
    }
    getAllQuizzesPopulate() {
        return Quiz.find().populate('questions').exec();
    }

    getQuizById(id) {
        return Quiz.findById(id).populate('questions').exec();
    }

    async createQuiz(quiz) {
        const newQuiz = new Quiz(quiz);
        return newQuiz.save();
    }
    deleteQuiz(id) {
        return Quiz.findByIdAndDelete(id);
    }
    updateQuiz(id, quiz) {
        return Quiz.findByIdAndUpdate(id, quiz, { new: true });
    }
}

module.exports = QuizService;