const userDAO = require('../dao/user-dao');
const { getUsers } = require('../dao/user-dao');

class UserService {
  getUsers() {
    return getUsers();
  }
  createUser(userDto) {
    const { username, first_name, last_name, password, city, state, zip } = userDto;
    return userDAO.createUser(username, first_name, last_name, password, city, state, zip);
  }
}

module.exports = new UserService();
