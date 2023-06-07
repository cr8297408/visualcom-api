import { Request, Response } from "express";
import { UserService } from "../../application/user";
import { User } from "../../domain";

const service = UserService
class UserController {
  async getUsers(req: Request, res: Response): Promise<void> {
    res.send(await service.getAll());
  }

  async getOneUser(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    console.log(id);
    res.send(await service.getOne(id))
  }

  async create(req: Request, res: Response): Promise<void> {
    const user: User = req.body;
    res.send(await service.create(user));
  }

  async update(req: Request, res: Response): Promise<void> {
    const user: User = req.body;
    const id = req.params.id;
    res.send(await service.update(user, id))
  }

  async defaultUsers(req: Request, res: Response): Promise<void> {
    for (let i = 0; i < req.body.number; i++) {
      await UserService.create({
        name: `user${i}`,
        email: `user${i}@email.com`,
        password: '123456',
      } as User);
    }
    res.send(`usuarios creados:  ${req.body.number}`);
  }
}

export default new UserController();