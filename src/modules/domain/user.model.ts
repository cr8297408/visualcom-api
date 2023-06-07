import { ObjectId } from 'mongodb';
import { Rol } from '.';

interface IUser {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  roles?: Rol[];
}
export class User {
  public _id: ObjectId;
  public name: string;
  public email: string;
  public password: string;
  public roles?: Rol[];
  constructor({ _id, name, email, roles, password }: IUser) {
    (this._id = _id),
      (this.name = name),
      (this.email = email),
      (this.roles = roles);
      (this.password = password);
  }
}
