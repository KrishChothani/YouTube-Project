import { Router } from 'express';
import { addVideoToWatchHistory, changeCurrentPassword, getCurrentUser, getUserChannelProfile, getWatchhistory, loginUser, logoutUser, refreshAccessToken, registerUser, updateaccountDetails, updateUserAvatar, updateUserCoverImage } from '../controllers/user.controller.js';
import { upload } from '../middlewares/multer.middleware.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();    

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser)

router.route("/login").post(loginUser)

//secured routes

router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/update-account").patch(verifyJWT, updateaccountDetails)
router.route("/avatar").patch(verifyJWT, upload.single("avatar") , updateUserAvatar) 
router.route("/coverImage").patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage)
router.route("/c/:userName").get(verifyJWT,getUserChannelProfile)
router.route("/history").get(verifyJWT, getWatchhistory)
router.route("/addVideoToWatchHistory").post(verifyJWT , addVideoToWatchHistory);

export default router;