const express = require('express');
const Router = express.Router();
const librariancontroller = require('../controller/librarian_controller')

Router.get('/', librariancontroller.getLibrarian); 
Router.post('/', librariancontroller.creatLibrarian);
Router.put('/', librariancontroller.updateUser);
Router.delete('/', librariancontroller.deleteUser);

module.exports = Router;