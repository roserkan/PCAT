const Photo = require('../models/Photo');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const add = async (req, res, next) => {
    try {
        const imageFile = req.files.image;
        const imageExt = imageFile.mimetype.split('/')[1];
        const random = uuidv4().replaceAll('-', '');
        const imageName = random + '.' + imageExt;
        req.files.image.name = imageName;
        const data = {
            ...req.body,
            image: imageName,
        };
        await imageFile.mv(path.join(basePath, 'public', 'uploads', imageName));
        await new Photo(data).save();
        res.redirect('/');
    } catch (err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
        await Photo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect('/');
    } catch (err) {
        next(err);
    }
};

const remove = async (req, res, next) => {
    try {
        const photo = await Photo.findByIdAndDelete(req.params.id);

        fs.unlink(path.join(basePath, 'public', 'uploads', photo.image), (err) => {
            if (err) throw err;
        });
        res.redirect('/');
    } catch (err) {
        next(err);
    }
};

module.exports = {
    add,
    update,
    remove,
};
