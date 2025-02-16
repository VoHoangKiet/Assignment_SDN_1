const Test = require('../model/Test');
const User = require('../model/User');

class QuestionService {

    getAllQuestionByQuizzId(id) {
        return Test.find({ quiz: id });
    }

    getAllTestByUserId(id) {
        return Test.find({ user: id });
    }

    async createTest(test) {
        const newTest = new Test(test);
        console.log(newTest);

        await newTest.save();
        await User.findByIdAndUpdate(test.user, { $push: { tests: newTest._id } });
        return newTest;
    }
    // getScore(answers) {
    //     let score = 0;
    //     answers.forEach(answer => {
    //         if (answer.isCorrect) {
    //             score++;
    //         }
    //     });
    //     return score;
    // }
}

module.exports = QuestionService;