const express = require('express');
const Router = express.Router();
const bookcontroller = require('../controller/book_controller')

Router.get('/', bookcontroller.getbooks); 
Router.post('/', bookcontroller.createBook);
//Router.put('/', bookcontroller.updateUser);
//Router.delete('/', bookcontroller.deleteUser);

module.exports = Router;