import { app } from "./controller/app";
import userRoute from "./routes/userRoute";
import taskRoute from "./routes/taskRoute";

app.use("/user", userRoute);
app.use("/task", taskRoute);
