import { Rol, User } from ".";

export class UserRol {
  constructor(
    public _id: string,
    public user: User,
    public rol: Rol,
  ){}
}
