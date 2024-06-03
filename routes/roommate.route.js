import { rommMethod } from "../controllers/roommate.controller.js";
import { Router } from "express";

const router = Router();

router.get("/roommates", rommMethod.getAllRoom);
router.post("/roommate", rommMethod.postOneRoom);

export default router;
