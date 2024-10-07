import express from "express";

const router = express.Router();

import { authUser,registerUser,logoutUser,getUserProfile,deleteUsers,getUsers,getUsersbyId,updateUserProfile } from '../controllers/userController.js'
import { protect,admin } from "../middleware/authMiddleware.js";


router.route('/').post(registerUser).get(protect,admin,getUsers);
router.post('/logout',logoutUser);
router.post('/auth',authUser);
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);
router.route(':/id').get(protect,admin,getUsersbyId).delete(protect,admin,deleteUsers).put(protect,admin,updateUserProfile)


export default router


 