import { Collection } from "mongodb";
import MongoDB from "../conection";

export interface ICollectionData {
  collectionName: string
}

export default class GetCollection extends MongoDB {
  constructor() {
    super();
  }

  exec(data: ICollectionData): Collection {
    const collection = this.db.collection(data.collectionName);
    return collection;
  }
}
