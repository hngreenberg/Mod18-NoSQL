const router = require('express').Router();
const {
  getAllUsers,
  getSingleuser,
  getUserById,
  createuser,
  deleteuser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

// /api/users
router
.route('/')
.get(getAllusers)
.post(createuser);

// /api/users/:userId
router
.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteuser);


router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeReaction);

module.exports = router;