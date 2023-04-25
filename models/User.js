const { Schema, model } = require('mongoose');

//defining User Schema
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
        validate: function(value) {
          return value === 'email@test.com'; 
        },
        message: 'Not a correct email address', 
      },
    
        
      thoughts: [ {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      },
    ],
     friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
    ],

  
    toJSON: {
      
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
userSchema.virtual('friendCount').get(function () {
  return `friends: ${this.friends.length}`;
  });


const User = model('User', userSchema);

module.exports = User;