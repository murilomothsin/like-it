// Load required packages
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// Define our user schema
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String
  },
});

// Execute before each user.save() call
UserSchema.pre('save', function (callback) {
  var user = this;
  // Break out if the password hasn't changed
  if (!user.isModified('password')) return callback();

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash
  callback();
});

UserSchema.methods.verifyPassword = function (password, cb) {
  const isMatch = bcrypt.compareSync(password, this.password);
  console.log("isMatch: ", isMatch)
  console.log(password, this.password)
  cb(null, isMatch)
};

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);