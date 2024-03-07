const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//--------method get all users--------------
router.get("/all_Users", userController.allUser);
//--------method get an user----------------
router.get("an_User/:id", userController.anUser);
//---------method post a new user-------------
router.post("new_User", userController.newUser);
//-------------method update an user---------------
router.put("update_User/:id", userController.updateUser);
//--------------method delete an user------------------
router.delete("delete_User/:id", userController.deleteUser);

module.exports = router;