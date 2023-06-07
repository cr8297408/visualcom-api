import { Collection, ObjectId, UpdateResult } from "mongodb";


interface IWriteRepository<T> {
  create(item: T): Promise<T>;
  update(id: string, item: T): Promise<UpdateResult>;
}

interface IReadRepository<T> {
  find(): Promise<T[]>;
  findOne(id: string): Promise<T | null>;
}

export default abstract class BaseRepository<T>
  implements IWriteRepository<T>, IReadRepository<T>
{
  collection: Collection;

  constructor(collection: Collection) {
    this.collection = collection;
  }
  async find(): Promise<T[]> {
    return (await this.collection.find().toArray()) as T[];
  }
  async findOne(id: string): Promise<T | null> {
    return (await this.collection.findOne({
      _id: {
        $eq: this.toObjectId(id),
      },
    })) as T;
  }
  async create(item: T): Promise<T> {
    return (await this.collection.insertOne(item as any)) as T;
  }
  async update(id: string, item: Partial<T>): Promise<UpdateResult> {
    console.log(id, item)
    console.log(this.toObjectId(id))
    return await this.collection.updateOne(
      {
        _id: {
          $eq: new ObjectId(id),
        },
      },
      {
        $set: item
      },
    );
  }

  private toObjectId(_id: string): ObjectId {
    return new ObjectId(_id);
  }
}