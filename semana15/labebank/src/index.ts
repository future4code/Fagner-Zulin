import express, { Express, Response, Request } from "express";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send({ message: "pong" });
});

app.listen(3003, () => {
  console.log("Listening in 3003 port");
});
