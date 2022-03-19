const express = require('express');
const ejs = require('ejs')
const path = require('path');
const helmet = require('helmet');
const fileUpload = require('express-fileupload');
const config = require('./config');
const loaders = require('./loaders');
const routes = require('./routes');
global.basePath = __dirname;

config();
loaders();
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true})); // MVC
app.use(fileUpload());
app.use(express.json());
app.use(helmet());

routes(app);



app.listen(process.env.APP_PORT || 5000, () =>
    console.log('Server listening: ' + process.env.APP_PORT)
);
