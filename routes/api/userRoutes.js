const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  getUserById,
  createUser,
  deleteUser,
  addToFriendsList,
  removefromFriendList,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:studentId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/assignments
router.route('/:userId/friends').post(addToFriendList);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendsId').delete(removefromFriendList);

module.exports = router;
