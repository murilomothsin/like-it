var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");
var Like = require('../models/Like.js');

router.use(function (req, res, next) {
  var token = req.headers['Authorization'] || req.headers['authorization'];
  if (token) {
    jwt.verify(token, "supersecret", function (err, decoded) {
      if (err) { return res.json({ success: false, message: 'Failed to authenticate token.', err: err }); }
      else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({ success: false, message: 'No token provided.' });
  }
});


/* GET home page. */
router.get('/', function (req, res, next) {
  Like.find({}, function (err, likes) {
    if (err) {
      res.status(500);
    } else {
      res.json({ data: likes });
    }
  });
});

router.get('/count', function (req, res, next) {
  Like.countDocuments({ like: true }, (err, likes) => {
    Like.countDocuments({ like: false }, (err, dislikes) => {
      res.json({ likes, dislikes })
    })
  })
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  const like = new Like()
  like.like = req.body.like
  like.creator = req.decoded._id
  like.save(function(err, like) {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json({ like })
  })
})

module.exports = router