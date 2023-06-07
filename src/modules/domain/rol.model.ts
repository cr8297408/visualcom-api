import { ObjectId } from 'mongodb';
import { User } from '.';

type TRol = 'admin' | 'standard' | 'business' | 'payer';

export class Rol {
  constructor(
    public _id: ObjectId,
    public name: TRol,
    public users?: User[],
  ){}
}
