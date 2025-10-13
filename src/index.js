const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const route = require('./routes/');
const db = require('./config/db');
const methodOverride = require('method-override');
const sortMiddleware = require('./app/middlewares/SortMiddleWare');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Custom middlewares
app.use(sortMiddleware);

//Connect to DB
db.connect();

//HTTP logger
app.use(morgan('combined'));

//Template engine setup
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: require('./helpers/handlebars'),
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

route(app);

app.listen(port, () =>
    console.log(`App is running on http://localhost:${port}`),
);
