const express = require("express");
const router = require("express").Router();
const { home, about, addPhoto, singlePhoto, update } = require('../controllers/Base');

router.get("/", home)
router.get("/image/:id", singlePhoto)
router.get("/about", about)
router.get("/add", addPhoto)
router.get("/edit/:id", update)




module.exports = {
    router,
}