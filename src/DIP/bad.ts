class MySQLDatabase {
  save(data: string): void {
    console.log(`Saving "${data}" to MySQL`);
  }
}

class OrderService {
  private database: MySQLDatabase;

  constructor(database: MySQLDatabase) {
    this.database = database;
  }

  createOrder(order: string): void {
    this.database.save(order);
  }
}

const database = new MySQLDatabase();
const service = new OrderService(database);
service.createOrder("New Order");
