var express = require('express');
var router = express.Router();
const Mongolib = require("../db/Mongolib");

/* GET home page. */
router.get('/', function (req, res, next) {
    Mongolib.getDatabase(db => {
        Mongolib.findDocuments(db, docs => {
            res.send(docs);
        })
    })
});


router.post('/',async function(req, res, next){
    Mongolib.getDatabase(db => {
        db.collection("offers").insertOne(req.body);
        res.send(req.body);
    });
});

module.exports = router;