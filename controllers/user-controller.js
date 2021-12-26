const UserService = require('../service/user-service');

class UserController {
  async getUsers(req, res) {
    try {
      const user = await UserService.getUsers();
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
    }
  }
  async createUser(req, res) {
    try {
     const id = await UserService.createUser(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
  async findUserByUsername(req, res) {
    try {
     const user = await UserService.findUserByUsername(req.body);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new UserController();