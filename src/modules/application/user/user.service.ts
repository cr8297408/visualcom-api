import { UserRepository } from '.'
import { User } from '../../domain';
import BaseRepository from '../baseRepository';

class UserService {
  userRepository: BaseRepository<User>;
  constructor() {
    this.userRepository = UserRepository;
  }
  getAll = () => {
    return  this.userRepository.find();
  };
  getOne = (id: string) => {
    return this.userRepository.findOne(id);
  };
  create = (user: User) => {
    return this.userRepository.create(user);
  }
  update = (user: Partial<User>, id: string) => {
    return this.userRepository.update(id, user);
  }
}

export default new UserService();