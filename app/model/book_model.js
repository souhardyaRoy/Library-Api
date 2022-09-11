// schema -> skeleton 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    bookName: {
        type: String,
        required: [true, "Name is mandatory, please dedo!!"],
        trim: true,
        minLength: 2
    },
   
    authorName: {
        type: String,
    },
    category:{
        type: String,
    },
   price:{
        type: Number
    },
    ISBN:{
        type: Number,
       
    },
    publication:{
        type: String, 
    },
     available_count:{
        type:Number,
        required: true
    } ,
    
    isDeleted: {
        type: Boolean,
        default: false,
        required: false,
    }
}, {timestamps: true});

module.exports = mongoose.model('Book', BookSchema);