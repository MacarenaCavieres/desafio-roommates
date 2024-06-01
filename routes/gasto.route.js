import { gastoMethod } from "../controllers/gasto.controller.js";
import { Router } from "express";

const router = Router();

router.get("/gastos", gastoMethod.getAllGastos);
router.post("/gasto", gastoMethod.postOneGasto);

export default router;
