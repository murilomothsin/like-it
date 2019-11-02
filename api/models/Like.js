var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LikeSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
  like: Boolean,
  created_at: { type: Date, default: Date.now }
});

LikeSchema.methods.countLikes = async () => {
  try {
    const employees = await User.find({company:companyID}).exec();
    console.log(employees);
    return employees;
  } catch (err) {
    return 'error occured';
  }
};

module.exports = mongoose.model('Like', LikeSchema);