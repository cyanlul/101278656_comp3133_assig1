const mongoose = require('mongoose');

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var validatePassword = function (password) {
    var re = /^[A-Za-z0-9#$&_]+$/
    return re.test(password)
};

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: [true, "Username already taken"]
    },
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [6, "Minimum of 6 characters required"],
        validate: [validatePassword, "Not a valid password"]
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: [validateEmail, "Not a valid email"]
    },
    type: {
        type: String,
        required: true,
        enum: ["admin", "customer"]
    }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;