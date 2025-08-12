import express from "express"
import { signup } from "./controller/Signupcontroller.js"

const routes = express.Router()

routes.post('/signup',signup)

export default routes