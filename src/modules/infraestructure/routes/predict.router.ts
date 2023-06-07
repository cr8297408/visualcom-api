import { Router } from "express";
import multer from "multer";
import { PredictController } from "../controllers";

const router = Router();

const upload = multer({ dest: 'uploads/' });
router.post('/', upload.single('image'), PredictController.predictLetter);

export default router;