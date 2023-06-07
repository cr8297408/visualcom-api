import bcrypt from "bcrypt";
import { UserRepository, UserService } from '../../application/user';
import { User } from '../../domain';
import { createToken } from "../../../core/token";
import { Request, Response } from "express";

const service = UserService;
const userRepository = UserRepository
class AuthController {
  async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    const users = await userRepository.find()
    const user = users.find(user => user.email === email);
    if(!user) throw new Error('User not found');
    console.log(user)
    if (!bcrypt.compareSync(password, user.password)) throw new Error('unauthorized');
    const token = await createToken(user);
    res.send(token)
  }

  async signup(req: Request, res: Response) {
    const user: User = req.body;
    user.password = await bcrypt.hash(user.password, 10);
    res.send(service.create(user))
  }
}

export default new AuthController();
