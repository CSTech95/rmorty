'use strict'

const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user-controller');

router.get('/people', UserController.getUsers);
router.post('/createuser', UserController.createUser);

module.exports = router;