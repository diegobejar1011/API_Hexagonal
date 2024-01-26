import { OrderRepository } from "../../domain/repository/orderRepository";
import { Order } from "../../domain/entities/order";
import { db } from "../../../shared/application/mysql.connection";

export class MySQLRepositoryOrder implements OrderRepository {
  async get(): Promise<Order[]> {
    const query = "SELECT * FROM pedidos";
    return db.execute(query).then((res: any) => {
      return res[0] as Order[];
    });
  }

  async create(order: Order): Promise<Order> {
    const { id, cantidad } = order;
    const query = "INSERT INTO pedidos (id_producto, cantidad) VALUES (?,?)";
    return db
    .execute(query, [id, cantidad])
    .then(() => {
        return order;
    })
    .catch((error) => {
        return error;
    });
  };
}
