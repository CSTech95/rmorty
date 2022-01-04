const characterDAO = require('../dao/character-dao');
// const { getUsers, findUserByUsername } = require('../dao/user-dao');

class CharacterService {

  getCharacters(Dto) {
    const { username } = Dto;
    return characterDAO.getCharacters(username);
  }

  createCharacter(Dto) {
    const { character_name, status, species, gender, image, username } = Dto;
    return characterDAO.createCharacter(character_name, status, species, gender, image, username);
}

 deleteCharacter(userDto) {
    const { id } = userDto;
    return characterDAO.deleteCharacter(id);
}

}

module.exports = new CharacterService();
