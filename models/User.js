const { Schema, model } = require('mongoose');


const moment = require('moment')
// Schema to create User model
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: [true, 'User email address required'],
      unique: true,
      validate: {
        validator: function (v) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
      },
 
    },

    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought'
  }],
  friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
  }],

  
  {
    toJSON: {
      getters: true,
    },
  }
)

const User = model('user', UserSchema);

module.exports = User;
