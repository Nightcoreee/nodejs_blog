const Course = require('../models/Course');
class siteController {
    // GET /
    async index(req, res) {
        try {
            const courses = await Course.find({});
            // res.json(courses);
            const formatted = courses
                .map((c) => `ID: ${c._id}\n${JSON.stringify(c, null, 2)}`)
                .join('\n\n');
            res.type('text/plain').send(formatted);
        } catch (error) {
            res.status(400).json({ error: 'ERROR!!!' });
        }
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new siteController();
