import express, { Express } from "express";
import cors from "cors";
import userRoute from "./routes/userRoutes";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.use('/users', userRoute)

app.listen(3003, () => {
  console.log("Server running on port 3003");
});
