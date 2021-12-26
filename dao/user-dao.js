const res = require('express/lib/response');
const bcrypt = require('bcrypt');
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
        password : bcrypt.hashSync(password, 10),
        city,
        state,
        zip,
      }).returning('id')
      return id;
  }

  async findUserByUsername(username) {
    const user = await db.from('user')
      .select('*').where({ username }).then(res=>res[0])
      return user ? user : Promise.reject('user not found');
}

}

module.exports = new UserDAO();