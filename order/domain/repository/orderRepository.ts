import { Order } from "../entities/order";

export interface OrderRepository {
    get(): Promise<Order[]>,
    create(order: Order): Promise<Order>
}