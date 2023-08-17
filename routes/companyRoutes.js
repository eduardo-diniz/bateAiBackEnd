const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.use(express.json());

router.post('/companies', companyController.createCompany);
router.get('/companies/:id', companyController.getCompany);
router.get('/companies', companyController.getCompanies);
router.put('/companies/:id', companyController.updateCompany);
router.delete('/companies/:id', companyController.deleteCompany);

module.exports = router;
