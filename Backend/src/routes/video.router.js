import { Router } from "express";
import {  deleteVideo, getAllVideos, getVideoById, publishAVideo, updateVideo,togglePublishStatus } from "../controllers/video.controller.js";
import { upload } from '../middlewares/multer.middleware.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router =  Router();
router.use(verifyJWT);

router.route("/").post( upload.fields([
                        {
                            name:"videoFile",
                            maxCount: 1,
                        },
                        {
                            name: "thumbnail",
                            maxCount: 1,
                        }
                    ]),
                    publishAVideo
                )

router.route("/").get(getAllVideos)
router.route("/v/:videoId").get(getVideoById)
router.route("/uv/:videoId").patch(upload.single("thumbnail"),updateVideo);
router.route("/uv/:videoId").delete(deleteVideo)
router.route("/uv/:videoId/toggle-publish").patch(togglePublishStatus);
export default router;
