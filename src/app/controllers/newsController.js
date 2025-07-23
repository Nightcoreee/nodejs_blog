class newsController {

  // GET /news
  index(req, res) {
    res.render('news', { title: 'News' });
  }

  show(req, res) {
    res.send('News details');
  }
}

module.exports = new newsController();