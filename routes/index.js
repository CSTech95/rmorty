'use strict'

const express = require('express');
const router = express.Router();

const CharacterController = require('../controllers/character-controller');

router.get('/', (req, res) => {
    res.send('Hello World!')
  })

router.post('/characters', CharacterController.getCharacters);
router.post('/addcharacter', CharacterController.createCharacter);
router.delete('/deletecharacter', CharacterController.deleteCharacter);

module.exports = router;