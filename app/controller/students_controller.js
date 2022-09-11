const Student = require('../model/students_model');
const http_formatter = require('../util/http_formatter');

const getStudents= async (request, response) => {
    try {
        const {pageNo, perPage} = request.query;
        const students = await Student.find({})
        return response.status(200).json(http_formatter( students,"users got succesfully"));
    } catch (error) {
        console.log(error);
        return response.status(400).json(http_formatter(error, "Something went wrong, please try again", false));
    }
}
const createNewUser = async (request, response) => {
    try {
        const students = await Student.create(request.body);
        return response.status(201).json(
            http_formatter(students, "User created successfully"),
        );
    } catch ( err ) {
        return response.status(400).json(http_formatter(err, "Something went wrong, please try again", false));
    }
}



module.exports = { 
    getStudents,
    createNewUser,
}