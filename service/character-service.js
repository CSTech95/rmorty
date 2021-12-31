const characterDAO = require('../dao/character-dao');
// const { getUsers, findUserByUsername } = require('../dao/user-dao');

class CharacterService {

  getCharacters(Dto) {
    const { user_id } = Dto;
    return characterDAO.getCharacters(user_id);
  }

  createCharacter(Dto) {
    const { character_name, status, species, gender, image, user_id } = Dto;
    return characterDAO.createCharacter(character_name, status, species, gender, image, user_id);
}

 deleteCharacter(userDto) {
    const { id } = userDto;
    return characterDAO.deleteCharacter(id);
}

}

module.exports = new CharacterService();
