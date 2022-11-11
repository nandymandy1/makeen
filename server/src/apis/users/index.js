import { Router } from "express";
import { REGISTER_USER, AUTHENTICATE_USER } from "./actions";

const router = Router();

router.post("/api/register", REGISTER_USER);
router.post("/api/auth", AUTHENTICATE_USER);

export default router;
