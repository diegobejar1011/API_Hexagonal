import { productoRepository } from "../../domain/repository/productoRepository";
import { Product } from "../../domain/entities/product";

export class GetProductService {
  constructor(private readonly ProductRepository: productoRepository) {}
  async execute(): Promise<Product[]> {
    try {
      const response = await this.ProductRepository.get();
      return response;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
