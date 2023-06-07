import { Router } from 'express';
import { AuthController, UserController } from '../controllers';
import { validateToken } from '../../application/middlewares/validateToken';

const router = Router();

router.get('/', validateToken, UserController.getUsers);
router.get('/:id', validateToken, UserController.getOneUser);
router.post('/', validateToken, UserController.create);
router.post('/login', AuthController.login);
router.post('/signUp', AuthController.signup);
router.put('/:id', validateToken, UserController.update);
router.post('/default', validateToken, UserController.defaultUsers);

export default router;