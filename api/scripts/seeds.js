var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/likeit');

var User = require('../models/User.js');

(() => {
  var userSeed = new User({
    email: 'test@email.com',
    password: '123456'
  });
  userSeed.save(function (err, user) {
    if (err) {
      console.log('ERROR: ', err)
      process.exit(1)
    }
    console.log("USER: ", user)
    process.exit(0)
  });
})()
