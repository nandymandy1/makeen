import { Router } from "express";
import { REGISTER_USER, AUTHENTICATE_USER, GET_AUTH_USER } from "./actions";
import { requiresAuth } from "../../middlewares/requiresAuth";

const router = Router();

router.get("/api/auth", requiresAuth, GET_AUTH_USER);
router.post("/api/register", REGISTER_USER);
router.post("/api/auth", AUTHENTICATE_USER);

export default router;
