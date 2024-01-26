import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./shared/application/mysql.connection";
import { router } from "./shared/infraestructure/index.router";


dotenv.config();

const app = express();
 
app.use(cors());
app.use(express.json());

app.use("/", router);

db.connect()
  .then(() => {
    console.log("Success connection to bd");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
  console.log("Server running at 3000");
});
