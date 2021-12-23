const res = require('express/lib/response');
const db = require('../db/db');

class UserDAO {
    async getUsers() {
    const user = await db.from('user')
      .select('*')
      return user
  }
  async createUser(username, firstName, lastName, password, city, state, zip) {
    const [id] = await db('user')
      .insert({
        username,
        first_name: firstName,
        last_name: lastName,
        password,
        city,
        state,
        zip,
      }).returning('id')
      return id;
  }
}

module.exports = new UserDAO();