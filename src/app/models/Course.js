const { SeverityLevel, UUID } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema(
    {
        name: { type: String, maxLength: 255, required: true },
        description: { type: String, maxLength: 600 },
        image: { type: String },
        videoID: { type: String, required: true },
        level: { type: String },
        totalTime: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
    },
    { timestamps: true },
);

//Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', Course);
