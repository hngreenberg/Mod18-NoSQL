const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController.js');


router
.route('/')
.get(getAllThoughts)
.post(createThought);


router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  

  router
  .route('/:thoughtId/reactions')
  .post(createReaction);

  
  router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;
