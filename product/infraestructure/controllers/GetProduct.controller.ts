import { Request, Response } from "express";
import { GetProductService } from "../../application/services/GetProduct.service";

export class GetProductController {
    constructor(readonly getProductService: GetProductService){}
    async execute(req: Request, res: Response ) {
        try {
            const result = await this.getProductService.execute();
            res.status(200).send(result);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}