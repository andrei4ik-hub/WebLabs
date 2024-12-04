const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register); // Регистрация нового пользователя
router.post('/login', authController.login); // Логин пользователя

module.exports = router;
