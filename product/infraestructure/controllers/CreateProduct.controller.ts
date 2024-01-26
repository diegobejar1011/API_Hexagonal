import { Request, Response } from "express";
import { CreateProductService } from "../../application/services/CreateProduct.service";

export class CreateProductController{
    constructor(private readonly createProductService: CreateProductService) {}
    async execute(req: Request, res: Response) {
        try {
            const product = req.body;
            const result = await this.createProductService.execute(product);
            res.status(200).send(result);
        } catch (error: any) {
            throw new Error(error);
        }
    };
}