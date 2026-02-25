import express from 'express'
import { createUser, verifyOTP } from '../controller/userController.js'
const route= express.Router()

route.post("/signup", createUser)
route.post("/verifyotp", verifyOTP)

export default route;