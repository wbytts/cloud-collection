import User from '../model/User';

class UserService {
  getUser() {
    return User.findOne();
  }
  getUserById(userId: number) {
    return User.findByPk(userId);
  }
}

export default new UserService();
