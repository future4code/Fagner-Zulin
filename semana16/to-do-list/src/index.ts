import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import routes from "./routes";

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(routes);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;

    console.log(`Server is running in port ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
