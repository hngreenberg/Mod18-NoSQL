const router = require('express').Router();
const {
  getusers,
  getSingleuser,
  createuser,
  deleteuser,
  updateUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');


router
.route('/')
.get(getusers)
.post(createuser);


router
.route('/:userId')
.get(getSingleuser)
 .put(updateUser)
.delete(deleteuser);


router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);

module.exports = router;