const Course = require('../models/Course');
class siteController {
    async index(req, res, next) {
        Course.find({})
            .then((course) => res.render('home', { course }))
            .catch(next);
        //res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new siteController();
