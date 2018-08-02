const express = require('express');
const router = express.Router();

const employee = require('../controllers/employee.controller');

//testing route
router.get('/', employee.test);

// Create a new employee
router.post('/employee', employee.create);

// Retrieve all employees
router.get('/employees', employee.findAll);

// Retrieve a single employee with employeeId
router.get('/employee/:employeeId', employee.findOne);

// Update a employee with employeeId
router.put('/employee/:employeeId', employee.update);

// Delete a employee with employeeId
router.delete('/employee/:employeeId', employee.delete);

module.exports = router;
