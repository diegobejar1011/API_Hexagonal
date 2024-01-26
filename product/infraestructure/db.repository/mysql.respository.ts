import { Product } from "../../domain/entities/product";
import { productoRepository } from "../../domain/repository/productoRepository";
import { db } from "../../../shared/application/mysql.connection";

export class MySQLRepositoryProduct implements productoRepository {
  async get(): Promise<Product[]> {
    const query = "SELECT * FROM producto";
    return db.execute(query).then((res: any) => {
      return res[0] as Product[];
    });
  };

  async create(product: Product): Promise<Product> {
    const { id, nombre } = product;
    const query = "INSERT INTO producto (id, nombre) VALUES (?,?)";
    return db
      .execute(query, [id, nombre])
      .then(() => {
        return product;
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  };
}
