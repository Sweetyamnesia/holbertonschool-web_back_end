const express = require('express');

const router = express.Router();

const AppController = require('/full_server//controllers/AppController');

const StudentsController = require('/full_server/controllers/StudentsController');   

router.get('/', AppController.home);

router.get('/students', StudentsController.getAllStudents);

router.get('/students/:major', StudentsController.getStudentsByMajor);

module.exports = router;

