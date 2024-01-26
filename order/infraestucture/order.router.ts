import { Router } from "express";

import { 
    getOrderController,
    createOrderController
} from "./order.dependencies";

export const orderRouter = Router();

orderRouter.get('/', getOrderController.execute.bind(getOrderController));
orderRouter.post('/', createOrderController.execute.bind(createOrderController));