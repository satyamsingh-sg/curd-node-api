const express = require("express");
const router = express.Router();
const {create,index,update,show,delete_user} = require("../controllers/user.controller");

router.post("/", create);
router.get("/", index);
router.put("/:id", update);
router.get("/:id", show);
router.delete("/:id", delete_user);

module.exports =  router;