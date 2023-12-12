import multer, { memoryStorage } from "multer"
import { Router } from "express"
import { createStreamLink, streamVideo, uploadStreamData } from "../controllers/videoController"

const router = Router()
const storage = memoryStorage()
const upload = multer({ storage })

router.get('/create-file-upload-link', upload.none(), createStreamLink)
router.post('/upload/:upload_url', upload.single('file'), uploadStreamData)
router.get("/watch/:upload_url", streamVideo)

export default router