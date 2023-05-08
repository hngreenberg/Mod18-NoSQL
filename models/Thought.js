const { model, Schema, Types } = require('mongoose');
const reactionSchema = require('../models/Reaction');


const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
      
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => new Date(timestamp).toLocaleString(),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual('reactionCount').get(function()
{
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema)

module.exports = ThoughtSchema;
