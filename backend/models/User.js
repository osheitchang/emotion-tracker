const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    username: {
        type: String,
        required:true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_it'
    }
});

const User = mongoose.model('User', userSchema )

module.exports = User;