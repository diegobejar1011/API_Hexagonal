// Database
import { MySQLRepositoryProduct } from "./db.repository/mysql.respository";
//Service
import { GetProductService, CreateProductService} from "../application/services";
//Controller
import { GetProductController, CreateProductController } from "./controllers";
 
const MySQLRepository = new MySQLRepositoryProduct();

const getProductService = new GetProductService(MySQLRepository);
const createProductService = new CreateProductService(MySQLRepository);

export const getProductController = new GetProductController(getProductService);
export const createProductController = new CreateProductController(createProductService);