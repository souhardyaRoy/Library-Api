const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    http_formatter = require('./util/http_formatter');

const app = express();

const whitelist = [
    // this port is the frontend port number.
    `http://localhost:3000`,
    `http://localhost:8080`
];

const corsOptions = {
    origin: function(origin, callback) {
        if(whitelist.includes(origin)) callback(null, true);
        else callback(new Error('You are not Authorized'));
    }
}

// app.options(cors('*'));
app.use(cors('*'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/**
 * /cart 
 * /order 
 * /products 
 * /user 
 * /whishlist -> task 
 * /offers -> task
 * /reviews -> task
 * /return -> task
*/

app.use('/student', require('./routes/students_routes'));
app.use('/book', require('./routes/book_routes'));
app.use('/librarian', require('./routes/librarian_routes'));
app.use('/issueBook', require('./routes/book_issue_routes'));

// error handling
// ! must always come in the end of defining all the routes of the application
// what if the user who is authorized, is sending a request on a
// endpoint that did not match.
app.use((req, res, next) => {
    const error = new Error('Invalid request');
    res.status = 404; // not found.
    next(error);
});

// this is the last route that will get hit, if there's no matching route or some error has occurred.
app.use((error, req, res, next) => {
    res.status = error.status || 500;
    return res.json(
        http_formatter(error, error.message, false)
    );
})

module.exports = app;