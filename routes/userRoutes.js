const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser); // Добавление пользователя (администратор)
router.get('/:id', userController.getUserById); // Просмотр конкретного пользователя (администратор)
router.put('/:id', userController.updateUser); // Изменение пользователя (администратор)
router.delete('/:id', userController.deleteUser); // Удаление пользователя (администратор)
router.get('/', userController.getAllUsers); // Просмотр списка пользователей (администратор)
router.get('/profile', userController.getUserProfile); // Просмотр профиля пользователя (авторизированный пользователь)

module.exports = router;
