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

  public init(routes: AppRoutes[]): App {
    this.middlewares();
    this.routes(routes);
    this.ping();

    return this;
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes(routes: AppRoutes[]): void {
    routes.map((route) => {
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
