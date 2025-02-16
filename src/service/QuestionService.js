const Question = require('../model/Question');
const Quiz = require('../model/Quiz');

class QuestionService {

    getAllQuizzes() {
        return Question.find();
    }

    getQuestionById(id) {
        return Question.findById(id);
    }
    getAllQuestionByQuizzId(id) {
        return Question.find({ quiz: id });
    }

    async createQuestion(QuizId, question) {
        const NewQuestion = new Question(question);
        await NewQuestion.save();
        await Quiz.findByIdAndUpdate(QuizId, { $push: { questions: NewQuestion._id } });
        return NewQuestion;
    }
}

module.exports = QuestionService;