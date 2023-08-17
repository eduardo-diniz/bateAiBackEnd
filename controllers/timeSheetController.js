const TimeSheet = require('../models/TimeSheet');

const createTimeSheet = async (req, res) => {
  try {
    const newTimeSheet = await TimeSheet.create(req.body);
    res.status(201).json(newTimeSheet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllTimeSheets = async (req, res) => {
  try {
    const timeSheets = await TimeSheet.findAll();
    res.json(timeSheets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getTimeSheetByCPF = async (req, res) => {
  const cpf = req.params.cpf;

  try {
    const timeSheets = await TimeSheet.findAll({
      where: {
        CPF: cpf,
      },
    });

    if (timeSheets.length > 0) {
      res.json(timeSheets);
    } else {
      res.status(404).json({ error: 'No TimeSheets found for the given CPF' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createTimeSheet,
  getAllTimeSheets,
  getTimeSheetByCPF,
};
