const express = require('express');
const router = express.Router();
const timeSheetController = require('../controllers/timeSheetController');

router.use(express.json());

router.post('/timeSheets', timeSheetController.createTimeSheet);
router.get('/timeSheets', timeSheetController.getAllTimeSheets);
router.get('/timeSheets/:cpf', timeSheetController.getTimeSheetByCPF);

module.exports = router;
