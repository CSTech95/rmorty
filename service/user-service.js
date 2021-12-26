const userDAO = require('../dao/user-dao');
// const { getUsers, findUserByUsername } = require('../dao/user-dao');

class UserService {

  getUsers() {
    return userDAO.getUsers();
  }

  createUser(userDto) {
    const { username, first_name, last_name, password, city, state, zip } = userDto;
    return userDAO.createUser(username, first_name, last_name, password, city, state, zip);
}

 findUserByUsername(userDto) {
    const { username } = userDto;
    return userDAO.findUserByUsername(username);
}

}

module.exports = new UserService();
