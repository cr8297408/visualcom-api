import * as mongoDB from 'mongodb';
import { envConfig } from '../../../config.env';

export default class MongoDB {
  #mongoDbUrl: string;
  #dbName: string;
  client: mongoDB.MongoClient;
  db: mongoDB.Db;
  constructor() {
    this.#mongoDbUrl = envConfig.DB_URL;
    this.#dbName = envConfig.DB_NAME;
    this.client = new mongoDB.MongoClient(this.#mongoDbUrl);
    this.db = this.client.db(this.#dbName);
    this.init();
  }

  private async init(): Promise<void> {
    try {
      await this.client.connect();
      console.log('Connected to DB...');
    } catch (error) {
      console.log('Failed to connect to DB');
      console.log(error);
    }
  }
}
