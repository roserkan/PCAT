const Photo = require('../models/Photo');

const home = async (req, res, next) => {
    try {
        const photos = await Photo.find({});
        res.render('index', { photos });
    } catch (err) {
        console.log('controllers=>base=>about');
        next(err);
    }
};

const singlePhoto = async (req, res, next) => {
    try {
        const photo = await Photo.findOne({ _id: req.params.id });
        res.render('photo', { photo });
    } catch (err) {
        console.log('controllers=>base=>about');
        next(err);
    }
};

const about = async (req, res, next) => {
    try {
        const photos = await Photo.find({});
        res.render('about', { photos });
    } catch (err) {
        console.log('controllers=>base=>about');
        next(err);
    }
};

const addPhoto = async (req, res, next) => {
    try {
        res.render('add');
    } catch (err) {
        console.log('controllers=>brands=>getAll');
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
        const photo = await Photo.findOne({ _id: req.params.id });
        res.render('edit', { photo });
    } catch (err) {
        console.log('controllers=>brands=>getAll');
        next(err);
    }
};

module.exports = {
    home,
    singlePhoto,
    about,
    addPhoto,
    update
};
