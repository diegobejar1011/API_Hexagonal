import { Product } from "../entities/product";

export interface productoRepository {
    get(): Promise<Product[]>;
    create(product: Product): Promise<Product>;
}