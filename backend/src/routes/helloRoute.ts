import { Router } from "express";
import { getHello } from "../controller/helloController";

const router = Router();

router.get("/", getHello);

export default router;