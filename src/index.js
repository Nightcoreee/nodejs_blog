const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const morgan = require('morgan');
const { engine } = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const route = require('./routes/');

//HTTP logger
        app.use(morgan('combined'));

//Template engine setup
    app.engine('hbs', engine({ extname: '.hbs' }));
    app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

route(app);

app.listen(port, () =>
        console.log(`Server is running on http://localhost:${port}`),
);
