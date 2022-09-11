const express = require('express');
const Router = express.Router();
const studentcontroller = require('../controller/students_controller')

Router.get('/', studentcontroller.getStudents); 
Router.post('/', studentcontroller.createNewUser);
Router.put('/', studentcontroller.updateUser);
Router.delete('/', studentcontroller.deleteUser);

module.exports = Router;