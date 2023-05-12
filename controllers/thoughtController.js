const { Thought, User, Reaction } = require('../models');


 const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },


  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) => {
       if (!thought) {
        return res.status(404).json({ message: 'No Thought found' })
       }
        res.json(thought)
  })
      .catch((err) => res.status(500).json(err));
  },

  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: 'No Thought found' });
        }
        return res.json(thought);
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).json({ message: 'Server Error' });
      });
  },
  

  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
 

 
 
  updateThought(req, res) {
  Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought found!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: 'No thought found!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
      
      
  createReaction(req, res) {
    Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $push: { reactions: req.body } },
          { runValidators: true, new: true }
        )
        .then((thought) =>
        !thought
        ? res.status(404).json({ message: 'No thought found' })
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
  

  deleteReaction(req, res) {
   Reaction.findOneAndUpdate (
          { _id: req.params.thoughtId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { runValidators: true, new: true }
        )
        .then((reaction) =>
       !reaction
       ? res.status(404).json({ message: 'No reaction found' })
        : res.json(thought)
        )


   }
  }
      module.exports = thoughtController; 
