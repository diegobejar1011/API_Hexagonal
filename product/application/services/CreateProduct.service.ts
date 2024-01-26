import { productoRepository } from "../../domain/repository/productoRepository";
import { Product } from "../../domain/entities/product";

export class CreateProductService {
  constructor(private readonly productRepository: productoRepository) {}
  async execute(product: Product): Promise<Product> {
    try {
      const res = await this.productRepository.create(product);
      return res;
    } catch (error: any) {
      throw new Error(error);
    }
  };
}
