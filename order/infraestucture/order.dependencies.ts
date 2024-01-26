//Database
import { MySQLRepositoryOrder } from "./dbRepository/mysql.repository";

//Service
import { 
    GetOrderService,
    CreateOrderService
 } from "../application/services";

//Controller 
import { 
    GetOrderController,
    CreateOrderController
} from "./controllers";

const MySQLRepository = new MySQLRepositoryOrder();

const getOrderService = new GetOrderService(MySQLRepository);
const createOrderService = new CreateOrderService(MySQLRepository);

export const getOrderController = new GetOrderController(getOrderService);
export const createOrderController = new CreateOrderController(createOrderService);