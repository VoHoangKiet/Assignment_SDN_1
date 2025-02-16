const User = require('../model/User');

class UserService {

    getAllUsers() {
        return User.find();
    }
    getAllUsersPopulate() {
        return User.find().populate('tests').exec();
    }

    getUserById(id) {
        return User.findById(id).populate('tests').exec();
    }

    async createUser(user) {
        const newUser = new User(user);
        return newUser.save();
    }
}

module.exports = UserService;