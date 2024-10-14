const {Router} = require('express');
const {createUser, loginUser}=require("../controllers/user.controllers");

const UserRouter=Router()

UserRouter.post("/signup",createUser)
UserRouter.post("/login",loginUser)

module.exports=UserRouter