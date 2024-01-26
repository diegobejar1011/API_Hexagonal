import { Request, Response  } from "express";
import { CreateOrderService } from "../../application/services/CreateOrder.service";

export class CreateOrderController {
    constructor(private readonly createOrderService: CreateOrderService) {}
    async execute(req: Request, res: Response) {
        try {
            const order = req.body;
            const result = await this.createOrderService.execute(order);
            res.status(200).send(result);
        } catch (error: any) {
            return res.status(500).send(error);
        }
    };
}