import express from "express"
const router = express.Router()
import UserController from '../controllers/userController.js'

router.get('/index', UserController.home)
router.get('/book', UserController.book)
router.get('/', UserController.register)
router.post('/', UserController.createUserDoc)
router.get('/login', UserController.login)
router.post('/login', UserController.verifyLogin)


export default router
