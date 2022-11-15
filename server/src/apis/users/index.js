import { Router } from "express";
import { REGISTER_USER, AUTHENTICATE_USER, GET_AUTH_USER } from "./actions";
import { requiresAuth } from "../../middlewares/requiresAuth";
import { RegisterValidations, AuthenticateValidations } from "../../validators";
import validator from "../../middlewares/validator";

const router = Router();

router.get("/api/auth", requiresAuth, GET_AUTH_USER);
router.post("/api/register", RegisterValidations, validator, REGISTER_USER);
router.post("/api/auth", AuthenticateValidations, validator, AUTHENTICATE_USER);

export default router;
