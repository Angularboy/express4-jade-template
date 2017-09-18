var express = require('express');
var router = express.Router();

var routeDoc = {doc_content: CONFIG.doc_content};
/* GET home page. */
router.get('/', function (req, res, next) {
    routeDoc.route = 'index';
    res.render('index', routeDoc);
});
/* GET about page. */
router.get('/about', function (req, res, next) {
    routeDoc.route = 'about';
    res.render('about', routeDoc);
});

module.exports = router;