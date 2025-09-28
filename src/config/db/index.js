const e = require('express');
const mongoose = require('mongoose');

async function connect() {
    // Database connection logic here
    try {
        await mongoose.connect('mongodb://localhost:27017/api_edu_dev');
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.log('Connection failed', error);
    }
}

module.exports = { connect };
