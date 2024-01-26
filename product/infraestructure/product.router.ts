import { Router } from "express";
import { 
    getProductController,
    createProductController
 } from "./product.dependencies";

export const productRouter = Router();

productRouter.get('/', getProductController.execute.bind(getProductController));
productRouter.post('/', createProductController.execute.bind(createProductController));