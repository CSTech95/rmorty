'use strict'

const express = require('express');
const router = express.Router();

const CharacterController = require('../controllers/character-controller');

router.get('/', (req, res) => {
    res.send('Hello World!')
  })

router.get('/characters', CharacterController.getCharacters);
router.post('/addcharacter', CharacterController.createCharacter);
router.post('/deletecharacter', CharacterController.deleteCharacter);

module.exports = router;