import { rommMethod } from "../controllers/roommate.controller.js";
import { Router } from "express";

const router = Router();

router.get("/roommates", rommMethod.getAllRoom);
router.get("/roommate", rommMethod.postOneRoom);

export default router;
