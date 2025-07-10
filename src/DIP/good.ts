interface IDatabase {
  save(payload: string): void;
}

class MongoDatabase implements IDatabase {
  save(payload: string): void {
    console.log(`saving... ${payload}`);
  }
}

class UserService {
  constructor(private db: IDatabase) {}
  createUser(user: string) {
    this.db.save(user);
  }
}

const db: IDatabase = new MongoDatabase();
const user = new UserService(db);
user.createUser("New user");
