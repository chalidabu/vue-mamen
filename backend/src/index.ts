import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
import helloRoute from "./routes/helloRoute";
app.use("/api/hello", helloRoute);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));