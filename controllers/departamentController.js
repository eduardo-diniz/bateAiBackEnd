const Department = require('../models/Department'); 

module.exports = {
  async createDepartment(req, res) {
    try {
      const newDepartment = await Department.create(req.body);
      res.status(201).json(newDepartment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async getDepartment(req, res) {
    try {
      const department = await Department.findByPk(req.params.id);
      if (department) {
        res.json(department);
      } else {
        res.status(404).json({ error: 'Department not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async getByDepartamentId(req, res) {
    try {
      const { departamentId } = req.params;
  
      const department = await Department.findOne({
        where: { DepartamentId: departamentId }
      });
  
      if (department) {
        res.json(department);
      } else {
        res.status(404).json({ error: 'Department not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async getDepartments(req, res) {
    try {
      const departments = await Department.findAll();
      res.json(departments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async updateDepartment(req, res) {
    try {
      const department = await Department.findByPk(req.params.id);
      if (department) {
        await department.update(req.body);
        res.json(department);
      } else {
        res.status(404).json({ error: 'Department not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async deleteDepartment(req, res) {
    try {
      const department = await Department.findByPk(req.params.id);
      if (department) {
        await department.destroy();
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Department not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
