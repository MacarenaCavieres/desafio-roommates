import { gastoMethod } from "../controllers/gasto.controller.js";
import { Router } from "express";

const router = Router();

router.get("/gastos", gastoMethod.getAllGastos);
router.post("/gasto", gastoMethod.postOneGasto);
router.delete("/gasto?id=:id", gastoMethod.removeOneGasto);
router.update("/gasto?id=:id", gastoMethod.removeOneGasto);

export default router;
