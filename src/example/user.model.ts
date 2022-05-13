import Connection from "./connection.js";

interface UserInterface {
  name: string;
  age: number;
}

export default class UserModel {
  collectionName = "user";

  async create(user: UserInterface) {
    return await Connection.getCollection(this.collectionName).insertOne(user);
  }

  async createMany(users: Array<UserInterface>) {
    return await Connection.getCollection(this.collectionName).insertMany(users);
  }

  async read() {
    return await Connection.getCollection(this.collectionName).find().toArray();
  }
}