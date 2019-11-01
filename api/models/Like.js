var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LikeSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
  like: Boolean,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Like', LikeSchema);