const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  getThoughtById,
  createThought,
  updateThought,
  deletethought,
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
  .delete(deletethought);

  router
  .route('/:thoughtId/reactions')
  .post(createReaction);

  
  router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;
