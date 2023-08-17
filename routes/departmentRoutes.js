const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departamentController');

router.use(express.json());

router.post('/departments', departmentController.createDepartment);
router.get('/departments/:departamentId', departmentController. getByDepartamentId);
router.get('/departments', departmentController.getDepartments);
router.put('/departments/:id', departmentController.updateDepartment);
router.delete('/departments/:id', departmentController.deleteDepartment);

module.exports = router;
