import { gastoMethod } from "../controllers/gasto.controller.js";
import { Router } from "express";

const router = Router();

router.get("/gastos", gastoMethod.getAllGastos);
router.post("/gasto", gastoMethod.postOneGasto);
router.delete("/gasto/:id", gastoMethod.removeOneGasto);
router.put("/gasto/:id", gastoMethod.updateOneGasto);

export default router;
