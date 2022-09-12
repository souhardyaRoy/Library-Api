const express = require('express');
const Router = express.Router();
const issuebookcontroller = require('../controller/book_issue_controller')

Router.get('/', issuebookcontroller.getIssuedbooks); 
Router.post('/', issuebookcontroller.createIssuedbooks);
//Router.put('/', issuebookcontroller.updateUser);
//Router.delete('/', issuebookcontroller.deleteUser);

module.exports = Router;