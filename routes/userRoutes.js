const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.use(express.json());

router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);
router.get('/users', userController.getUsers);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.get('/users/bycpf/:cpf', userController.getUserByCpf);

module.exports = router;