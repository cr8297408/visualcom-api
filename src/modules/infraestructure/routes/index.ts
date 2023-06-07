import { Router } from 'express';
import UserRouter from './user.router';
import PredictRouter from './predict.router';

const router = Router()

router.use('/users', UserRouter);
router.use('/predict', PredictRouter);

export default router