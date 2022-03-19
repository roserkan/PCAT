const express = require('express');
const router = require('express').Router();
const { add, update, remove } = require('../controllers/Photo');

router.post('/add', add);
router.post('/update:id', update);
router.get('/delete/:id', remove);

module.exports = {
    router,
};
