// schema -> skeleton 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LibrarianSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is mandatory, please dedo!!"],
        trim: true,
        minLength: 2
    },
    phone: {
        type: Number,
        minLength: 10,
        maxLength: 14,
        unique: true,
        required: [true, 'User phone number required']
    },
    // ACID - Atomicity Consistency, Isolation, durability
    email: {
        type: String,
        trim: true, // "    sachin duhan    " -> "sachin duhan"
        lowercase: true, // input = CAPS@GMAIL.COM | it will e converted to caps@gmail.com
        unique: true,
        validate: {
            validator: function(email) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email is required, please dedo"]
    },
    
    designation : {
        type: String,
        required: [true, "Name is mandatory, please dedo!!"],
        trim: true,
    },
    library_num : {
        type: Number, 
    },
    isDeleted: {
        type: Boolean,
        default: false,
        required: false,
    }
}, {timestamps: true});

module.exports = mongoose.model('Librarian', LibrarianSchema);