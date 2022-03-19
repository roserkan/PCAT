const BaseRoutes = require("./Base").router;
const PhotoRoutes = require("./Photo").router;




module.exports = (app) => {
    app.use("/", BaseRoutes)
    app.use("/photos", PhotoRoutes)
}