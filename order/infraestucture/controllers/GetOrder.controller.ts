import { Request, Response } from "express";
import { GetOrderService } from "../../application/services/GetOrder.service";

export class GetOrderController{
    constructor(private readonly getOrderService: GetOrderService) {}
    async execute(req: Request, res: Response) {
        try {
            const result = await this.getOrderService.execute();
            res.status(200).send(result)
        } catch (error: any) {
            return res.status(500).send(error);
        }
    }
}