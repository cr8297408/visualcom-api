import { Collection } from "mongodb";
import { GetCollection, ICollectionData } from "./methods";
interface IFDMongoDB {
  getCollection(data: ICollectionData): Collection;
}
class FDMongoDB implements IFDMongoDB {
  #getCollectionMethod: GetCollection
  constructor(){
    this.#getCollectionMethod = new GetCollection();
  }

  getCollection(data: ICollectionData): Collection {
    return this.#getCollectionMethod.exec(data);
  }
}

export default new FDMongoDB();
