const mongoose = require('mongoose');
const {types}=require('os');
const path = require('path');
const {title}= require('process');
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['draft', 'published'],
        default: 'draft'
    },
    imagepath: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model('Post', postSchema);
