import { ConnectionOptions } from 'mysql2'; 
import dotenv from 'dotenv';

dotenv.config();

export const configConnection: ConnectionOptions = {
    host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
};