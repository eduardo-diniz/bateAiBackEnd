const Company = require('../models/Company');


async function createCompany(req, res) {
  try {
    const { senha, ...companyData } = req.body; 

    const newCompany = await Company.create({ ...companyData, senha: senha });
    res.status(201).json(newCompany);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getCompany(req, res) {
  try {
    const company = await Company.findByPk(req.params.id);
    if (company) {
      res.json(company);
    } else {
      res.status(404).json({ error: 'Company not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getCompanies(req, res) {
  try {
    const companies = await Company.findAll();
    res.json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateCompany(req, res) {
  try {
    const company = await Company.findByPk(req.params.id);
    if (company) {
      await company.update(req.body);
      res.json(company);
    } else {
      res.status(404).json({ error: 'Company not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteCompany(req, res) {
  try {
    const company = await Company.findByPk(req.params.id);
    if (company) {
      await company.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Company not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  createCompany,
  getCompany,
  getCompanies,
  updateCompany,
  deleteCompany,
};
