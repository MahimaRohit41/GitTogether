const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error("Please add valid Email id")
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Please enter strong password")
            }
        }
    },
    age: {
        type: Number,
        min: 18,
        max: 100
    },
    gender:{
        type: String,
        validate(value){ // This works for new document only by default we need to explicitly add to validate for existing document
            if(!["Male", "Female", "Other"].includes(value)){
                throw new Error("Please enter valid Gender");
                
            }
        }
    },
    photoUrl: {
        type: String,
        default: '/images/DefaultUserPhoto.jpg'
    },
    about: {
        type: String,
        default: "This is the default about for the user"
    },
    skills: {
        type: [String]
    }
},{
    timestamps: true
}
);

module.exports = mongoose.model("User", userSchema);