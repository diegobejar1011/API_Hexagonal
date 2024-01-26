import { Order } from "../../domain/entities/order";
import { OrderRepository } from "../../domain/repository/orderRepository";

export class GetOrderService{
    constructor(private readonly orderRepository: OrderRepository) {}
    async execute(): Promise<Order[]> {
        try {
            const res = await this.orderRepository.get();
            return res;
        } catch (error: any) {
            throw new Error(error);
        }
    };
}