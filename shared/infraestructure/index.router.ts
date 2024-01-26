import { Router } from "express";
import { productRouter } from "../../product/infraestructure/product.router";
import { orderRouter } from "../../order/infraestucture/order.router";

export const router = Router();

router.use('/products', productRouter);
router.use('/orders', orderRouter);