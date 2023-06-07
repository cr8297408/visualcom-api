import { FDMongo } from "../../../proxy";
import { User } from "../../domain";
import BaseRepository from "../baseRepository";

class UserRepository extends BaseRepository<User> {
  constructor() {
    super(FDMongo.getCollection({ collectionName: 'users' }));
  }
}

export default new UserRepository();