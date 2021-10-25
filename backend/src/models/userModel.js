const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true, // This data is necessari if we what create a object
            unique: true, // Send a error if de data is duplicate into de database
            trim: true // Delete empty spaces
        }
    }, {
        timestamps: true // Creation date 
    });

module.exports = model('userModel', userSchema);