const CharacterService = require('../service/character-service');

class CharacterController {
  async getCharacters(req, res) {
    try {
      const character = await CharacterService.getCharacters(req.body);
      res.status(201).json(character);
    } catch (err) {
      console.error(err);
    }
  }
  async createCharacter(req, res) {
    try {
     const id = await CharacterService.createCharacter(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
  async deleteCharacter(req, res) {
    try {
     const character = await CharacterService.deleteCharacter(req.body);
      res.status(201).json(character);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new CharacterController();