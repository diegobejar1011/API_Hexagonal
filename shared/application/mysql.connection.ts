import { createConnection } from "mysql2";
import { configConnection } from "../domain/mysql.config";
import { Connection } from "mysql2/typings/mysql/lib/Connection";

const connection : Connection = createConnection(configConnection);
export const db = connection.promise();