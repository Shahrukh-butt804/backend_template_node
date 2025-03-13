import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { router } from "./routes/index.js";
import { testingRouter } from "./routes/testing.route.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
dotenv.config();

const app: Application = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(errorMiddleware)

// testing routes
app.use("/", testingRouter);

// Router
app.use("/api/v1", router);



export { app };

