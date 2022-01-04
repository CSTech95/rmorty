const res = require('express/lib/response');
const db = require('../db/db');

class CharacterDAO {

    async getCharacters(username) {
    const user = await db.from('character')
      .select('*').where({ username })
      return user
  }

  async createCharacter(character_name, status, species, gender, image, username) {
    const [id] = await db('character')
      .insert({
        character_name,
        status,
        species,
        gender,
        image,
        username
      }).returning('id')
      return id;
  }

  async deleteCharacter(id) { 
    const user = await db.from('character')
      .select('*').where({ id }).del()
      return user ? user : Promise.reject('user not found');
}

}

module.exports = new CharacterDAO();