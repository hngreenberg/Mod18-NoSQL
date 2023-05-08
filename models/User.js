const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        // Use a regular expression to validate email addresses
        return /\S+@\S+\.\S+/.test(value);
      },
      message: 'Not a valid email address',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false, // Don't select the password by default
    set: function(value) {
      // Hash the password before storing it in the database
      return bcrypt.hashSync(value, 10);
    },
  },
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'Thought',
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
}, {
  toJSON: {
    virtuals: true,
    getters: true,
  },
});

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
