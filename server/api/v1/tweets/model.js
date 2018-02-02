const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  content: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  active: { type: Boolean, default: true,select: false, }
},{
    timestamps: true
});
    
module.exports = mongoose.model('tweet', schema);
