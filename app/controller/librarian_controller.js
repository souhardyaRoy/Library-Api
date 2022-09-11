const Librarian = require('../model/librarian_model');
const http_formatter = require('../util/http_formatter');

const getLibrarian= async (request, response) => {
    try {
        const {pageNo, perPage} = request.query;
        const librarian = await Librarian.find({})
        return response.status(200).json(http_formatter( librarian,"users got succesfully"));
    } catch (error) {
        console.log(error);
        return response.status(400).json(http_formatter(error, "Something went wrong, please try again", false));
    }
}
const creatLibrarian = async (request, response) => {
    try {
        const librarian = await Librarian.create(request.body);
        return response.status(201).json(
            http_formatter(librarian, "User created successfully"),
        );
    } catch ( err ) {
        return response.status(400).json(http_formatter(err, "Something went wrong, please try again", false));
    }
}



module.exports = { 
    getLibrarian,
    creatLibrarian,
}