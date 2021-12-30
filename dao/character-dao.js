const res = require('express/lib/response');
const db = require('../db/db');

class CharacterDAO {

    async getCharacters(user_id) {
    const user = await db.from('character')
      .select('*').where({ user_id })
      return user
  }

  async createCharacter(character_name, status, species, gender, image, user_id) {
    const [id] = await db('character')
      .insert({
        character_name,
        status,
        species,
        gender,
        image,
        user_id
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