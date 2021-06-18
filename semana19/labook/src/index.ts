import App from "./app";
import handleUser from "./routes/userRoutes";
import handlePost from "./routes/postRoutes";
import dotenv from "dotenv";

dotenv.config();

const expressApp: App = new App([handleUser, handlePost]);

expressApp.init().listen();
