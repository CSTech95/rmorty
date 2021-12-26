'use strict'

const express = require('express');
const router = express.Router();
// const authenticate = require('../middleware/authenticate');
const authController = require('../controllers/auth');

const UserController = require('../controllers/user-controller');

router.get('/', (req, res) => {
    res.send('Hello World!')
  })

router.post('/login', authController.login);
router.get('/users', UserController.getUsers);
router.post('/createuser', UserController.createUser);
router.post('/findusername', UserController.findUserByUsername);

module.exports = router;