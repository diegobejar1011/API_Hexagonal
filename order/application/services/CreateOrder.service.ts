import { Order } from "../../domain/entities/order";
import { OrderRepository } from "../../domain/repository/orderRepository";

export class CreateOrderService {
    constructor(private readonly orderRepository: OrderRepository) {}
    async execute(order: Order): Promise<Order> {
        try {
            const res = await this.orderRepository.create(order);
            return res;
        } catch (error: any) {
            throw new Error(error);
        }
    };
}
