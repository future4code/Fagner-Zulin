import express, { Express } from "express";
import cors from "cors";
import { Router } from "express";

export interface AppRoutes {
  path: string;
  handle: Router;
}

export default class App {
  private port: number = Number(process.env.PORT) || 3003;
  private express: Express = express();

  constructor(private routes: AppRoutes[]) {}

  public init(): App {
    this.middlewares();
    this.router();
    this.ping();

    return this;
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private router(): void {
    this.routes.map((route) => {
      this.express.use(route.path, route.handle);
    });
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  private ping(): void {
    this.express.get("/ping", (req, res) => {
      res.send({ message: "Pong" });
    });
  }
}
