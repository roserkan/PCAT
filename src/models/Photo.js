const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const PhotoSchema = new Schema(
    {
        title: String,
        description: String,
        image: String,
    },
    { timestamps: true, versionKey: false }
);

module.exports = Mongoose.model('Photo', PhotoSchema);
