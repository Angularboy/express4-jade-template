var express = require('express');
var router = express.Router();

var routeDoc = {doc_content: CONFIG.doc_content};
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', routeDoc);
});

module.exports = router;