const express = require('express');
const Router = express.Router();
const issuebookcontroller = require('../controller/book_issue_controller')

Router.get('/', issuebookcontroller.getStudents); 
Router.post('/', issuebookcontroller.createNewUser);
Router.put('/', issuebookcontroller.updateUser);
Router.delete('/', issuebookcontroller.deleteUser);

module.exports = Router;